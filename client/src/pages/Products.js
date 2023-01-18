import React, { useState, useEffect } from "react";

import ProductsCard from "../components/ProductsCard";
import { BallTriangle } from "react-loader-spinner";
import ReactPaginate from "react-paginate";

import { client } from "../client";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 10;
  const pageVisited = pageNumber * productPerPage;

  const displayProduct = products
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

  const pageCount = Math.ceil(products.length / productPerPage);
  const onPageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const query = '*[_type=="products"]';
    client.fetch(query).then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <motion.h1 className="py-10 text-center">
        View All Products At One Place
      </motion.h1>
      <div className="flex flex-row-reverse">
        <div>
          {!products.length ? (
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
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mb-4 px-8">
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
        <div className="w-1/4 pl-6">
          <h2 className="text-4xl text-center mb-6">Categories</h2>
          <div className="flex flex-col gap-2 items-start bg-slate-200">
            <Button variant="outlined" fullWidth color="primary">
              American Football
            </Button>
            <Button variant="outlined" fullWidth color="primary">
              Basket Ball
            </Button>
            <Button variant="outlined" fullWidth color="primary">
              Baseball
            </Button>
            <Button variant="outlined" fullWidth color="primary">
              Hoodies
            </Button>
            <Button variant="outlined" fullWidth color="primary">
              Tracksuits
            </Button>
            <Button variant="outlined" fullWidth color="primary">
              Gloves
            </Button>
            <Button variant="outlined" fullWidth color="primary">
              Jackets
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
