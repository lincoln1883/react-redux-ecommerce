import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import currencySlice from "./currencySlice";
import uiSlice from "./UiSlice";

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		currency: currencySlice.reducer,
		ui: uiSlice.reducer,
	},
});

export default store;
