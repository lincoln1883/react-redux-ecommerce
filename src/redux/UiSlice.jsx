import { createSlice } from "@reduxjs/toolkit";

const initialUistate = {
	currencyIsVisible: false,
	cartIsVisible: false,
	showText: false,
};

const uiSlice = createSlice({
	name: "uiSlice",
	initialState: initialUistate,
	reducers: {
		toggleCurrency(state) {
			state.currencyIsVisible = !state.currencyIsVisible;
		},

		toggleCart(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},

		toggleShowText(state) {
			state.showText = !state.showText;
		},

		isShowCartVisible(state) {
			state.cartIsVisible = false;
		},

		isCurrencyVisible(state) {
			state.currencyIsVisible = false;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
