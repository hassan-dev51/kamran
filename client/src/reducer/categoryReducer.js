const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let { filteredData, quantity } = action.payload;
      const productPrice = filteredData.map((item) => item.price);
      const test = state.cartProducts.concat(quantity);
      console.log(test);
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts[filteredData],
          // ...filteredData,
          // test,

          // .concat(filteredData).map((item) => ({
          //   ...item,
          //   qty: quantity,
          // })),
        ],
        total: state.total + productPrice * quantity,
        totalQuantity: state.totalQuantity + quantity,
      };
    default:
      return state;
  }
};

export default reducer;
