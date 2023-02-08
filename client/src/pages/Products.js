import React, { useState } from "react";

import ProductsCard from "../components/ProductsCard";
import { BallTriangle } from "react-loader-spinner";
import ReactPaginate from "react-paginate";

import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useCategoryContent } from "../context/categoryContext";

const Products = () => {
  const { products } = useCategoryContent();
  const [categoryProducts, setCategoryProducts] = useState(products);
  //pagination code start here
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 10;
  const pageVisited = pageNumber * productPerPage;

  const displayProduct = categoryProducts
    .slice(pageVisited, pageVisited + productPerPage)
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .map((currElem) => <ProductsCard key={currElem._id} {...currElem} />);

  const pageCount = Math.ceil(categoryProducts.length / productPerPage);
  const onPageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const categoryFilterButton = (product, property) => {
    let newValue = product.map((data) => {
      return data[property];
    });
    return (newValue = ["ALL", ...new Set(newValue)]);
  };

  const filterButton = categoryFilterButton(products, "category");

  const updateFilterFunction = (e) => {
    let value = e.target.value;

    let filterProducts = products;
    if (value !== "ALL") {
      filterProducts = filterProducts.filter((currElem) => {
        return currElem.category === value;
      });
    }
    setCategoryProducts(filterProducts);
  };
  return (
    <div className="">
      <motion.h1 className="py-10 text-center">
        View All Products At One Place
      </motion.h1>
      <div className="flex md:flex-row-reverse flex-col-reverse items-center md:items-start">
        <div className="w-3/4">
          {!categoryProducts.length ? (
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={`flex justify-center items-center h-[75vh]`}
              wrapperStyle=""
              visible={true}
            />
          ) : (
            <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-6 mb-4 px-8 ">
              {displayProduct}
            </div>
          )}
          <div className="md:px-8 px-4 flex justify-center items-center">
            <ReactPaginate
              breakLabel="..."
              previousLabel={"Prev"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={onPageChange}
              containerClassName={`paginationbtn`}
              activeClassName={`activePagination`}
            />
          </div>
        </div>
        <div className="md:w-1/4 w-full p-6">
          <h2 className="text-4xl text-center mb-6">Categories</h2>
          <div className="flex flex-col gap-2 items-start">
            {filterButton.map((category, ind) => (
              <Button
                variant="outlined"
                fullWidth
                color="primary"
                key={ind}
                name="category"
                value={category}
                onClick={updateFilterFunction}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
