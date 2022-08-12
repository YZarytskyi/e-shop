import React, { useEffect, useLayoutEffect, useState } from "react";
import { productsApi } from "../../API/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { deleteSelectedProduct, selectedProduct } from "../../Redux/Reducers/productReducer";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";
import { addCard, removeCard } from "../../Redux/Reducers/cartReducer";

const Product = () => {
  const product = useSelector((state) => state.allProducts.product);
  const dispatch = useDispatch();
  const productId = useParams();

  const fetchProduct = async () => {
    const response = await productsApi.getProduct(productId.productId);
    dispatch(selectedProduct(response));
  };

  let [btnText, setBtnText] = useState("Add to Cart")

  const handlerClick = (product) => {
    if(btnText === "Add to Cart") {
      setBtnText("Remove from Cart")
      dispatch(addCard(product))
    } else {
      setBtnText("Add to Cart")
      dispatch(removeCard(product))
    }
  }

  useEffect(() => {
    if(productId && productId !== "") fetchProduct();
    return () => {
      dispatch(deleteSelectedProduct())
    }
  }, [productId]);

  const ProductDetail = () => {
    return (
      <>
      <div className="col-md-5 product">
        <img
          src={product.image}
          alt={product.title}
          height="300px"
          width="300px"
          className="ms-5"
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-text-black-50">
          {product.category}
        </h4>
        <h1 className="display-6">{product.title}</h1>
        <p className="lead fw-bolder">
        Rating {product.rating && product.rating.rate}
        <FontAwesomeIcon icon="fa-solid fa-star" className="ms-1"/>
        </p>
        <h3 className="display-6 fw-bold my-4">
          $ {product.price}
        </h3>
        <p className="lead">{product.description}</p>
        <button className="btn btn-outline-dark px-4 py-2 w-50" onClick={() => handlerClick(product)}>{btnText}</button>
        <NavLink to="/cart">
        <button className="btn btn-outline-dark ms-2 px-3 py-2">Go to Cart</button>
        </NavLink>
      </div>
      </>
    );
  };

  return (
    <div className="container py-5 px-5">
      <div className="row py-4">
        <ProductDetail />
      </div>
    </div>
  );
};

export default Product;
