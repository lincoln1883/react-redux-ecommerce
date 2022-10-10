import React, { Component } from "react";
import { connect } from "react-redux";
import { FETCH_NAV_DATA } from "../../API/ApolloQueries";
import { currencyActions } from "../../redux/currencySlice";
import { uiActions } from "../../redux/UiSlice";
import navLogo from "../../assets/images/navLogo.png";
import downIcon from "../../assets/images/downIcon.png";
import cartIcon from "../../assets/images/cartIcon.png";
import {
	ArrowIcon,
	CartBadge,
	CartButton,
	CartIcon,
	CurrencyButton,
	CurrencyContent,
	CurrencyDisplay,
	NavActions,
	NavContainer,
	NavIcon,
	Navigation,
	NavLink,
} from "./navbarStyles";
import { client } from "../../General";
import Modal from "../modal/Modal";

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.nav = React.createRef();
		this.state = {
			navData: [],
		};
	}

	fetchNavData = async () => {
		await client
			.query({
				query: FETCH_NAV_DATA,
			})
			.then((res) => this.setState({ navData: res.data }));
	};

	componentDidMount() {
		this.fetchNavData();
	}

	updateCurrencyHandler = (currency) => {
		const { label, symbol } = currency;
		this.props.onUpdateCurrency({
			label,
			symbol,
		});

		this.props.onIsCurrencyVisible();
	};

	toggleCurrencyHandler = () => {
		this.props.onToggleCurrency();
		this.props.onIsShowCartVisible();
	};

	navHandler = (e) => {
		if (e.target === this.nav.current) {
			this.props.onIsCurrencyVisible();
			this.props.onIsShowCartVisible();
		}
	};

	render() {
		const { currencyIsVisible, cartIsVisible } = this.props.ui;
		const { cartItems, currency, cartQty } = this.props;
		const { categories, currencies } = this.state.navData;

		return (
			<>
				<NavContainer ref={this.nav} onClick={this.navHandler}>
					<Navigation>
						{categories &&
							categories.map((category, index) => (
								<NavLink to={`/category/${category.name}`} key={index}>
									{category.name}
								</NavLink>
							))}
					</Navigation>

					<NavIcon src={navLogo} alt="nav logo" />

					<NavActions>
						<CurrencyButton onClick={this.toggleCurrencyHandler}>
							<span>{currency.symbol}</span>
							<ArrowIcon src={downIcon} alt="down icon" />
						</CurrencyButton>

						{currencyIsVisible && (
							<CurrencyDisplay>
								{currencies.map((currency, index) => (
									<CurrencyContent
										key={index}
										id={currency.label}
										onClick={() => this.updateCurrencyHandler(currency)}>
										<span>{currency.symbol}</span>
										<span>{currency.label}</span>
									</CurrencyContent>
								))}
							</CurrencyDisplay>
						)}

						<CartButton>
							<div onClick={() => this.props.onToggleCart()}>
								<CartIcon src={cartIcon} alt="cart icon" />
								{cartItems.length > 0 && <CartBadge>{cartQty}</CartBadge>}
							</div>

							{cartIsVisible && <Modal />}
						</CartButton>
					</NavActions>
				</NavContainer>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currency: state.currency,
		cartItems: state.cart.items,
		cartQty: state.cart.totalQty,
		ui: state.ui,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateCurrency: (currency) =>
			dispatch(currencyActions.updateCurrency(currency)),
		onToggleCurrency: () => dispatch(uiActions.toggleCurrency()),
		onToggleCart: () => dispatch(uiActions.toggleCart()),
		onIsShowCartVisible: () => dispatch(uiActions.isShowCartVisible()),
		onIsCurrencyVisible: () => dispatch(uiActions.isCurrencyVisible()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
