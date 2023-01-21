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
  allProducts: [],
};
const CategoryContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateFilterFunction = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({
      type: "UPDATE_FILTER",
      payload: { name: name, value: value, products },
    });
  };

  useEffect(() => {
    const query = '*[_type=="products"]';
    client.fetch(query).then((data) => setProducts(data));
  }, []);

  return (
    <context.Provider value={{ ...state, products, updateFilterFunction }}>
      {children}
    </context.Provider>
  );
};

const useCategoryContent = () => {
  return useContext(context);
};

export { CategoryContext, useCategoryContent };
