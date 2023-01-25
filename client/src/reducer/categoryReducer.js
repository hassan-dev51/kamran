const reducer = (state, action) => {
  switch (action.type) {
    case "DECREASE_QUANTITY":
      if (state.quantity - 1 < 1) {
        return {
          ...state,
          quantity: 1,
        };
      }
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "ADD_PRODUCT":
      let { filteredData, quantity } = action.payload;
      const productPrice = filteredData.map((item) => item.price);

      return {
        ...state,
        cartProducts: [...state.cartProducts, ...filteredData],
        total: state.total + productPrice * quantity,
        totalQuantity: state.totalQuantity + quantity,
      };
    default:
      return state;
  }
};

export default reducer;
