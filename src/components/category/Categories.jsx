import React, { Component } from "react";
import {
	CartBtn,
	NotInStock,
	ProductCard,
	ProductContent,
	ProductElement,
	ProductImg,
	ProductPrice,
	ProductTitle,
} from "./CategoriesStyles";
import cartButton from "../../assets/images/greenShoppingCart.jpeg";

class CategoryItems extends Component {
	render() {
		const { product, addItemsToCartHandler, currency } = this.props;

		return (
			<ProductCard>
				<ProductElement to={`/product/${product.id}`}>
					<ProductImg url={product.gallery[0]} Stock={product.inStock}>
						{!product.inStock && (
							<NotInStock>
								<h4>OUT OF STOCK</h4>
							</NotInStock>
						)}
					</ProductImg>

					<ProductContent Stock={product.inStock}>
						<ProductTitle>
							<span>
								{product.brand} {product.name}
							</span>
						</ProductTitle>
						<ProductPrice>
							{product.prices.map(
								(price, index) =>
									price.currency.label === currency.label && (
										<span key={index}>
											{price.currency.symbol} {price.amount}
										</span>
									)
							)}
						</ProductPrice>
					</ProductContent>
				</ProductElement>
				<CartBtn
					src={cartButton}
					alt="cart button logo"
					Stock={product.inStock}
					onClick={() => addItemsToCartHandler(product)}
				/>
			</ProductCard>
		);
	}
}

export default CategoryItems;
