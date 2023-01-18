import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setShowCart(state) {
      state.showCart = true;
    },
  },
});

export const { setShowCart } = cartSlice.actions;

export default cartSlice.reducer;
