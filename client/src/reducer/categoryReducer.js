const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      const { products, value } = action.payload;

      let temp = products;
      if (value !== "ALL") {
        temp = temp.filter((currElem) => {
          return currElem.category === value;
        });
      }
      return {
        ...state,
        allProducts: temp,
      };

    default:
      return state;
  }
};

export default reducer;
