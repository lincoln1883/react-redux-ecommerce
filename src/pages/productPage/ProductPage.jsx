import React, { Component } from "react";
import { withParams } from "../../General";
import { connect } from "react-redux";
import { uiActions } from "../../redux/UiSlice";
import ProductImg from "../../components/productDetails/ProductImg";
import ProductAttributes from "../../components/productDetails/ProductDetails";
import { FETCH_PRODUCT_BY_ID } from "../../API/ApolloQueries";
import { Query } from "@apollo/client/react/components";
import { Error, Loading } from "../categoryPage/CategoryPageStyles";

class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedImg: "",
		};
	}

	selectedImgHandler = (e) => {
		this.setState({ selectedImg: e.target.src });
	};
	render() {
		const { params } = this.props;

		return (
			<Query query={FETCH_PRODUCT_BY_ID(params.productId)}>
				{({ loading, error, data }) => {
					if (loading) return <Loading>Loading...</Loading>;
					if (error) return <Error>Something went wrong...</Error>;

					if (!loading && !error)
						return (
							<div
								className="productPage"
								onClick={() => this.props.onIsCurrencyVisible()}>
								<ProductImg
									productImgs={data.product.gallery}
									updateSelectedImgs={this.selectedImgHandler}
									selectedImg={this.state.selectedImg}
								/>
								<ProductAttributes product={data.product} />
							</div>
						);
				}}
			</Query>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIsCurrencyVisible: () => dispatch(uiActions.isCurrencyVisible()),
	};
};

export default connect(null, mapDispatchToProps)(withParams(ProductPage));
