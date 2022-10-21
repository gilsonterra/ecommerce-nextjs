import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import { RootState } from "./store";

export type CartState = {
  products: Product[];
};

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addCart } = cartSlice.actions;

export const selectTotalProduct = (state: RootState): number =>
  state.cart.products.length || 0;

export const selectTotalByProduct = (state: RootState, payload: Product): number =>
  state.cart.products.filter(item => item.id === payload.id).length || 0;

export default cartSlice.reducer;
