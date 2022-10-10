import React, { Component } from "react";
import { cartActions } from "../../redux/CartSlice";
import { uiActions } from "../../redux/UiSlice";
import { connect } from "react-redux";
import {
	Brand,
	InputLabel,
	Name,
	ProductAttr,
} from "../../components/productDetails/ProductDetailStyle";
import { Attributes } from "../../components/modal/ModalStyles";
import {
	CartBtn,
	CartButton,
	CartElement,
	CartTitle,
	CartTotal,
	OrderButton,
	Quantity,
	Span,
	SpanColor,
	Tax,
} from "./CartPageStyles";
import ImageSlider from "../../components/ImageSlider";
import { Container } from "../../GeneralStyles";
import { withParams } from "../../General";

class CartPage extends Component {
	onRemoveCartHandler = (id) => {
		this.props.onItemRemove(id);
	};

	totalPriceHandler = () => {
		let totalPrice = 0;
		this.props.cart.forEach((item) => {
			const { prices } = item.product;
			prices.forEach((price) => {
				if (this.props.currency.label === price.currency.label) {
					totalPrice += price.amount * item.qty;
				}
			});
		});
		return totalPrice.toFixed(2);
	};

	taxHandler = () => {
		return (this.totalPriceHandler() * 0.21).toFixed(2);
	};

	onOrderHandler = () => {
		this.props.onClearItemsFromCart();
		this.props.navigate("/category/all");
	};

	render() {
		const { cart, cartQty, currency } = this.props;
		return (
			<Container onClick={() => this.props.onIsCurrencyVisible()}>
				<CartTitle>Cart</CartTitle>
				<section style={{ display: "flex" }}>
					{cart.map((item, index) => (
						<div className="cartPageProduct" key={index}>
							<CartElement>
								<div>
									<Brand>{item.product.brand}</Brand>
									<Name>{item.product.name}</Name>
									<div className="price">
										{item.product.prices.map(
											(price) =>
												price.currency.label === currency.label &&
												`${price.currency.symbol} ${price.amount}`
										)}
									</div>

									<ProductAttr>
										{item.product.attributes.map((attribute) => (
											<Attributes key={attribute.id}>
												<div className="cart-label">{attribute.name} :</div>
												<div>
													{attribute.items &&
														attribute.items.map((attri, index) =>
															attribute.type === "swatch" ? (
																<InputLabel key={index}>
																	<SpanColor
																		selected={
																			item.selectedAttr.find(
																				(selectAttr) =>
																					selectAttr.id === attribute.id
																			) &&
																			item.selectedAttr.find(
																				(selectAttr) =>
																					selectAttr.id === attribute.id
																			).value === attri.value
																		}
																		color={attri.value}></SpanColor>
																</InputLabel>
															) : (
																<InputLabel key={index}>
																	<Span
																		selected={
																			item.selectedAttr.find(
																				(selectAttr) =>
																					selectAttr.id === attribute.id
																			) &&
																			item.selectedAttr.find(
																				(selectAttr) =>
																					selectAttr.id === attribute.id
																			).value === attri.value
																		}>
																		{attri.displayValue}
																	</Span>
																</InputLabel>
															)
														)}
												</div>
											</Attributes>
										))}
									</ProductAttr>
								</div>
								<CartButton>
									<CartBtn onClick={() => this.props.onAddItemToCart(item)}>
										+
									</CartBtn>
									<span>{item.qty}</span>
									<CartBtn
										onClick={() =>
											this.onRemoveCartHandler({
												id: item.id,
												selectedAttr: item.selectedAttr,
											})
										}>
										-
									</CartBtn>
								</CartButton>
							</CartElement>
							<ImageSlider gallery={item.product.gallery} />
						</div>
					))}
				</section>

				<CartTotal>
					<div>
						<Tax>
							Tax 21%:{" "}
							<span>
								{" "}
								{this.props.currency.symbol}
								{this.taxHandler()}
							</span>
						</Tax>
						<Quantity>
							Quantity: <span>{cartQty}</span>
						</Quantity>
					</div>
					<div>
						<div className="cartPageTotal">
							<span>Total: </span>
							{this.props.currency.symbol}
							{this.totalPriceHandler()}
						</div>
					</div>
					<OrderButton onClick={this.onOrderHandler}>
						<span>Order</span>
					</OrderButton>
				</CartTotal>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart.items,
		cartQty: state.cart.totalQty,
		currency: state.currency,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddItemToCart: (item) => dispatch(cartActions.addItemToCart(item)),
		onItemRemove: (item) => dispatch(cartActions.removeItemFromCart(item)),
		onIsCurrencyVisible: () => dispatch(uiActions.isCurrencyVisible()),
		onClearItemsFromCart: () => dispatch(cartActions.clearItemsFromCart()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withParams(CartPage));
