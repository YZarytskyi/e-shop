import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeCard } from "../../../Redux/Reducers/cartReducer";
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleClose = (product) => {
    dispatch(removeCard(product))
  }

  const cartProduct = (cartProduct) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartProduct.id}>
        <div className="container py-4">
          <button onClick={() => handleClose(cartProduct)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-3 product">
              <img
                src={cartProduct.image}
                alt={cartProduct.title}
                height="150px"
                width="150px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartProduct.title}</h3>
              <p className="lead fw-bold">$ {cartProduct.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <h3>Your Cart is Empty</h3>
        </div>
      </div>
    );
  };

  const button = () => {
    return(
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="mb-5 w-25 mx-auto">
            <Button variant="dark" className="w-100">Proceed to checkout</Button>
          </NavLink>
        </div>
      </div>
    )
  }

  return (
    <>
      {cart.length === 0 && emptyCart()}
      {cart.length !== 0 && cart.map(cartProduct)}
      {cart.length !== 0 && button()}
    </>
  );
};

export default Cart;
