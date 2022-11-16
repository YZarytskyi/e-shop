import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeCard, addCard, removeCardQty } from "../Redux/Reducers/cartReducer";
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleClose = (product) => {
    dispatch(removeCard(product))
  }

  const handleAdd = (product) => {
    dispatch(addCard(product))
  }

  const handleRemove = (product) => {
    let productInCard = cart.filter((x) => x.id === product.id) 
    productInCard[0].qty > 1
    ? dispatch(removeCardQty(product))
    : dispatch(removeCard(product))
  }

  const cartProduct = (cartProduct) => {
    return (
      <div key={cartProduct.id}> 
          <div className="product">
            <div className="product-img">
              <img
                src={cartProduct.image}
                alt={cartProduct.title}
                height="130px"
                width="130px"
              />
            </div>
            <div className="product-desc">
              <h4>{cartProduct.title}</h4>
              <p className="lead fw-normal">
              <Badge bg="dark">{cartProduct.qty}</Badge> X ${cartProduct.price} = ${(cartProduct.qty * 
              cartProduct.price).toFixed(2)}</p>
              <div className="product-add-remove">
              <Button onClick={() => handleAdd(cartProduct)} variant="dark" className=''>+</Button>
              <Button onClick={() => handleRemove(cartProduct)} variant="dark" className=''>-</Button>
              </div>
              <hr />
            </div>
            <button onClick={() => handleClose(cartProduct)} className="btn-close closeBtn" aria-label="Close"></button>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="empty">
          <div>Your Cart is Empty</div>
          <NavLink to="/products">
            <Button variant="dark" className=''>Show all products</Button>
          </NavLink>
      </div>
    );
  };

  const buttonCheckout = () => {
    return(
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="mb-5 w-25 mx-auto">
            <Button variant="dark" className="w-100 mt-2">Proceed to checkout</Button>
          </NavLink>
        </div>
      </div>
    )
  }

  return (
    <>
      {cart.length === 0 && emptyCart()}
      {cart.length !== 0 && cart.map(cartProduct)}
      {cart.length !== 0 && buttonCheckout()}
    </>
  );
};

export default Cart;
