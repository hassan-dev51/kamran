const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let { filteredData } = action.payload;
      return {
        ...state,
        cartProducts: [...state.cartProducts, ...filteredData],
      };
    default:
      return state;
  }
};

export default reducer;
