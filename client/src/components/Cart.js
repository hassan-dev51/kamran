import React, { useEffect, useRef } from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { Button } from "@mui/material";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
const Cart = ({ setShowCart }) => {
  console.log("cart");

  return (
    <div className="w-screen bg-[#00000080] fixed right-0 top-0 z-[100] transition-all ">
      <div className="h-screen md:w-[600px] w-[400px] bg-white float-right p-10 relative transition ease-in-out delay-150">
        <button
          type="button"
          className="flex items-center text-xl cursor-pointer gap-1 ml-3 border-none bg-transparent"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="ml-3">Your Cart</span>
          <span className="ml-3 text-[#f02d34]">(23 items)</span>
        </button>
        {/* empty shopping cart */}
        {/* <div className="m-10 grid place-items-center gap-3">
          <AiOutlineShopping size={150} />
          <h3 className="font-semibold text-xl">Your Shopping Cart is Empty</h3>
          <Link to="/products">
            <Button
              variant="contained"
              color="error"
              onClick={() => setShowCart(false)}
            >
              Continue Shopping
            </Button>
          </Link>
        </div> */}
        {/* product shopping cart */}
        <div className="product-container">
          <div className="product flex ">
            <img src={logo} alt="error" className="cart-product-image  " />
            <div className="item-desc">
              <div className="flex justify-between mr-3">
                <h5>Jacket</h5>
                <h4>$ 45</h4>
              </div>
              <div className=" mt-3 flex justify-between items-center">
                <div>
                  <p className="quantity-desc">
                    <span className="minus">
                      <AiOutlineMinus />
                    </span>
                    <span className="num" onClick="">
                      4
                    </span>
                    <span className="plus">
                      <AiOutlinePlus />
                    </span>
                  </p>
                </div>
                <button type="button" className="remove-item">
                  <TiDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-bottom">
          <div className="total flex justify-between">
            <h3>Sub Total:</h3>
            <h3>$ 34</h3>
          </div>
          <div className="btn-container">
            <Button variant="contained" color="success">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
