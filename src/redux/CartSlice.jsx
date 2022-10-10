import { createSlice } from "@reduxjs/toolkit";
import { equals } from "./helper";

const initialCartState = {
	items: [],
	totalQty: 0,
};

const cartSlice = createSlice({
	name: "cartSlice",
	initialState: initialCartState,
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;

			const existingItem = state.items.find((item) =>
				equals(item.selectedAttr, newItem.selectedAttr)
			);

			state.totalQty++;

			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					product: newItem.product,
					selectedAttr: newItem.selectedAttr,
					qty: newItem.qty,
				});
			} else {
				existingItem.qty++;
			}
		},

		removeItemFromCart(state, action) {
			const { payload } = action;

			const existingItem = state.items.find((item) =>
				equals(item.selectedAttr, payload.selectedAttr)
			);
			state.totalQty--;
			if (existingItem.qty === 1) {
				state.items = state.items.filter(
					(item) => !equals(item.selectedAttr, payload.selectedAttr)
				);
			} else {
				existingItem.qty--;
			}
		},

		clearItemsFromCart(state) {
			return {
				...state,
				items: [],
				totalQty: 0,
			};
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
