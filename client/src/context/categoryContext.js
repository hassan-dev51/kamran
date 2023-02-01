import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { client } from "../client";
import reducer from "../reducer/categoryReducer";
const context = createContext();

const initialState = {
  cartProducts: [],
  totalQuantity: 0,
  price: 0,
  total: 0,
  items: 0,
};
const CategoryContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.cartProducts);

  const onAdd = (filteredData, quantity) => {
    dispatch({ type: "ADD_PRODUCT", payload: { filteredData, quantity } });
  };
  useEffect(() => {
    const query = '*[_type=="products"]';
    client.fetch(query).then((data) => setProducts(data));
  }, []);

  return (
    <context.Provider
      value={{
        ...state,
        products,
        onAdd,
      }}
    >
      {children}
    </context.Provider>
  );
};

const useCategoryContent = () => {
  return useContext(context);
};

export { CategoryContext, useCategoryContent };
