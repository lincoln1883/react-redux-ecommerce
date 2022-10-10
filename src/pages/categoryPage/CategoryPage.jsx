import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { cartActions } from "../../redux/CartSlice";
import { uiActions } from "../../redux/UiSlice";
import { withParams } from "../../General";
import Categories from "../../components/category/Categories";
import { Container } from "../../GeneralStyles";
import {
	CategoryList,
	CategoryTitle,
	Error,
	Loading,
} from "./CategoryPageStyles";
import { FETCH_CATEGORY } from "../../API/ApolloQueries";

class CategoryPage extends Component {
	addItemsToCartHandler = (product) => {
		let selectedAttr = [];
		if (product.attributes.length > 0) {
			product.attributes.map((attribute) =>
				selectedAttr.push({
					id: attribute.id,
					value: attribute.items[0].value,
				})
			);

			const item = {
				product,
				selectedAttr,
				qty: 1,
				id: product.id,
			};

			this.props.onAddItemsToCart(item);
		} else {
			const item = {
				product,
				selectedAttr,
				qty: 1,
				id: product.id,
			};

			this.props.onAddItemsToCart(item);
		}
	};

	render() {
		const { params } = this.props;
		// console.log(params)

		return (
			<Container onClick={() => this.props.onIsCurrencyVisible()}>
				<CategoryTitle>{params.category}</CategoryTitle>
				<CategoryList>
					<Query query={FETCH_CATEGORY(params.category)}>
						{({ loading, error, data }) => {
							if (loading) return <Loading>Loading...</Loading>;
							if (error) return <Error>Something went wrong...</Error>;

							if (!loading && !error)
								return data.category.products.map((product) => (
									<Categories
										key={product.id}
										product={product}
										currency={this.props.currency}
										addItemsToCartHandler={this.addItemsToCartHandler}
									/>
								));
						}}
					</Query>
				</CategoryList>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currency: state.currency,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddItemsToCart: (product) => dispatch(cartActions.addItemToCart(product)),
		onIsCurrencyVisible: () => dispatch(uiActions.isCurrencyVisible()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withParams(CategoryPage));
