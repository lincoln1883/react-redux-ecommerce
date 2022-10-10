import React, { Component } from "react";
import { connect } from "react-redux";
import { cartActions } from "../../redux/CartSlice";
import { withParams } from "../../General";
import {
	Attributes,
	Cart,
	CartButton,
	CartContent,
	CartImg,
	CartTotal,
	Content,
	Modal,
	ModalColorSpan,
	ModalContainer,
	ModalContent,
	ModalSpan,
	Name,
	PriceText,
	QtyBtn,
	QtyButton,
	Text,
	Total,
} from "./ModalStyles";
import { InputLabel, ProductAttr } from "../productDetails/ProductDetailStyle";
import { uiActions } from "../../redux/UiSlice";

class ModalItems extends Component {
	constructor(props) {
		super(props);
		this.modal = React.createRef();
	}

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

	viewBagHandler = () => {
		this.props.onIsShowCartVisible();
		this.props.navigate("/cart");
	};

	checkOutHandler = () => {
		this.props.onIsShowCartVisible();
		this.props.navigate("/category/all");
	};

	closeModalHandler = (e) => {
		if (e.target === this.modal.current) this.props.onIsShowCartVisible();
	};

	render() {
		const { cart, cartQty, currency } = this.props;

		return (
			<>
				<ModalContainer
					ref={this.modal}
					id="modal"
					onClick={this.closeModalHandler}>
					<Modal>
						<ModalContent>
							<Text>
								<span>My Bag,</span>
								<span>
									{cartQty} {cartQty === 1 ? " item" : " items"}
								</span>
							</Text>

							<Content>
								{cart.map((item, index) => (
									<Cart key={index}>
										<CartContent>
											<div>
												<Text>{item.product.brand}</Text>
												<Text>{item.product.name}</Text>
												<PriceText>
													{item.product.prices.map(
														(price) =>
															price.currency.label === currency.label &&
															`${price.currency.symbol} ${price.amount}`
													)}
												</PriceText>

												<ProductAttr>
													{item?.product?.attributes?.map((attribute) => (
														<Attributes key={attribute?.id}>
															<Name>{attribute?.name} :</Name>
															<div className="productAtrributes">
																{attribute?.items &&
																	attribute?.items.map((attri, index) =>
																		attribute?.type === "swatch" ? (
																			<InputLabel key={index}>
																				<ModalColorSpan
																					selected={
																						item?.selectedAttr.find(
																							(selectAttr) =>
																								selectAttr.id === attribute.id
																						) &&
																						item?.selectedAttr.find(
																							(selectAttr) =>
																								selectAttr.id === attribute.id
																						).value === attri.value
																					}
																					color={attri.value}></ModalColorSpan>
																			</InputLabel>
																		) : (
																			<InputLabel key={index}>
																				<ModalSpan
																					className="spanText"
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
																				</ModalSpan>
																			</InputLabel>
																		)
																	)}
															</div>
														</Attributes>
													))}
												</ProductAttr>
											</div>
											<QtyButton>
												<QtyBtn
													onClick={() => this.props.onAddItemToCart(item)}>
													+
												</QtyBtn>
												<span>{item.qty}</span>
												<QtyBtn
													onClick={() =>
														this.onRemoveCartHandler({
															id: item.id,
															selectedAttr: item.selectedAttr,
														})
													}>
													-
												</QtyBtn>
											</QtyButton>
										</CartContent>
										<CartImg>
											<img
												src={item.product.gallery[0]}
												alt={item.product.name}
											/>
										</CartImg>
									</Cart>
								))}
							</Content>
							<CartTotal>
								<span>Total</span>
								<Total>
									{this.props.currency.symbol}
									{this.totalPriceHandler()}
								</Total>
							</CartTotal>
						</ModalContent>
						<CartButton>
							<button className="actions" onClick={this.viewBagHandler}>
								<span>View Bag</span>
							</button>
							<button className="actions order" onClick={this.checkOutHandler}>
								<span>Check Out</span>
							</button>
						</CartButton>
					</Modal>
				</ModalContainer>
			</>
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
		onIsShowCartVisible: () => dispatch(uiActions.isShowCartVisible()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withParams(ModalItems));
