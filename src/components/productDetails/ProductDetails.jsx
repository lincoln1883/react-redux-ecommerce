import React, { Component } from "react";
import { connect } from "react-redux";
import { withParams } from "../../General";
import {
	AttributeContainer,
	Brand,
	Button,
	Description,
	Label,
	Name,
	Price,
	ProductPrice,
	Title,
	ProductAttr,
	List,
	SpanText,
	SpanColor,
	Input,
	InputLabel,
} from "./ProductDetailStyle";
import parse from "html-react-parser";
import { uiActions } from "../../redux/UiSlice";
import { cartActions } from "../../redux/CartSlice";

class ProductAttributes extends Component {
	state = {
		selectedAttr: [],
		message: "",
	};

	onChangeHandler = (e) => {
		const { value, name } = e.target;
		this.setState({
			selectedAttr: [
				...this.state.selectedAttr,
				{
					id: name,
					value: value,
				},
			],
			message: " ",
		});
	};

	addItemsToCartHandler = (product) => {
		const { selectedAttr } = this.state;
		const item = {
			product,
			selectedAttr,
			qty: 1,
			id: product.id,
		};

		if (
			Object.keys(product.attributes).length !==
			Object.keys(selectedAttr).length
		) {
			this.setState({ message: " Please select all required attributes." });
		} else {
			this.props.onAddItemToCart(item);
		}
	};

	render() {
		const { showText } = this.props.ui;
		const { product } = this.props;

		const { brand, name, attributes, prices, inStock, description } = product;

		return (
			<AttributeContainer>
				<p className="notification">{this.state.message}</p>
				<Title>
					<Brand>{brand}</Brand>
					<Name>{name}</Name>
				</Title>

				<ProductAttr>
					{attributes &&
						attributes.map((attribute) => (
							<div key={attribute.id}>
								<Label>{attribute.name} :</Label>
								<List>
									{attribute.items &&
										attribute.items.map((item) => (
											<div key={item.id}>
												<Input
													type="radio"
													id={`${attribute.name}_${item.id}`}
													value={item.value}
													name={attribute.id}
													onChange={this.onChangeHandler}
												/>

												{attribute.type === "text" ? (
													<InputLabel htmlFor={`${attribute.name}_${item.id}`}>
														<SpanText>{item.displayValue}</SpanText>
													</InputLabel>
												) : (
													<InputLabel htmlFor={`${attribute.name}_${item.id}`}>
														<SpanColor color={item.value}></SpanColor>
													</InputLabel>
												)}
											</div>
										))}
								</List>
							</div>
						))}
				</ProductAttr>

				<ProductPrice>
					<Label>PRICE:</Label>
					<Price>
						{prices &&
							prices.map(
								(price) =>
									price.currency.label === this.props.currency.label &&
									`${price.currency.symbol} ${price.amount}`
							)}
					</Price>
				</ProductPrice>

				{inStock ? (
					<Button onClick={() => this.addItemsToCartHandler(product)}>
						ADD TO CART
					</Button>
				) : (
					<Button type="button" disabled>
						OUT OF STOCK
					</Button>
				)}

				{description && (
					<div>
						{description.length > 200 ? (
							showText ? (
								<Description>
									{parse(description)}
									<button onClick={() => this.props.onToggleShowText()}>
										Show less
									</button>
								</Description>
							) : (
								<Description>
									{parse(description.substring(0, 200))}
									<button onClick={() => this.props.onToggleShowText()}>
										Show More
									</button>
								</Description>
							)
						) : (
							<Description>{parse(description)}</Description>
						)}
					</div>
				)}
			</AttributeContainer>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currency: state.currency,
		ui: state.ui,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onToggleShowText: () => dispatch(uiActions.toggleShowText()),
		onAddItemToCart: (item) => dispatch(cartActions.addItemToCart(item)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withParams(ProductAttributes));
