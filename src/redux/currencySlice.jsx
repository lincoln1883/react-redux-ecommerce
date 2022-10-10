import { createSlice } from "@reduxjs/toolkit";

const initialCurrencyState = {
	label: "USD",
	symbol: "$",
};

const currencySlice = createSlice({
	name: "currency",
	initialState: initialCurrencyState,
	reducers: {
		updateCurrency(state, action) {
			return {
				...state,
				label: action.payload.label,
				symbol: action.payload.symbol,
			};
		},
	},
});

export const currencyActions = currencySlice.actions;
export default currencySlice;
