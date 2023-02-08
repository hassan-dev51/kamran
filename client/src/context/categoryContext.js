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
};
const CategoryContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const onAdd = (filteredData) => {
    dispatch({ type: "ADD_PRODUCT", payload: { filteredData } });
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
