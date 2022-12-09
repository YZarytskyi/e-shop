import React, { useEffect, useState } from "react";
import style from './Products.module.css'
import { useSelector, useDispatch } from "react-redux";
import { productsApi } from "../../API/productsApi";
import { setProducts } from "../../Redux/Reducers/productReducer";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { ProductsSkeleton } from "../LoadingSkeleton";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [filterList, setFilterList] = useState(products)
  const [loading, setLoading] = useState(false)

  const fetchProducts = async () => {
    setLoading(true);
    const response = await productsApi.getProducts();
    dispatch(setProducts(response));
    setFilterList(response)
    setLoading(false)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterProduct = (type) => {
    const updatedList = products.filter(x => x.category === type)
    setFilterList(updatedList)
  }
  const FilterButtons = () => {
    return (
      <div className={style.filterButtons}>
        <button className="btn btn-outline-dark" onClick={() => setFilterList(products)}>All</button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("jewelery")}>Jewelry</button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("electronics")}>Electronic</button>
      </div>
    );
  };


  const AllProducts = () => {
    if (filterList.length) {
    return (
      <>
        {filterList.map((product) => (
          <div className={style.card} key={product.id}>
            <NavLink to={`/products/${product.id}`} style={{ textDecoration: 'none', color: "black" }}>
              <Card className="h-100 text-center p-4 cardItem">
                <Card.Img variant="top" src={product.image} height='220px' />
                <Card.Body>
                  <Card.Title className="mb-0">{product.title.slice(0,12)}...</Card.Title>
                  <Card.Text className="lead fw-bold">
                    ${product.price}
                  </Card.Text>
                  <button variant="primary" className="btn btn-outline-dark">Buy Now</button>
                </Card.Body>
              </Card>
            </NavLink>
          </div>
          )
        )}
      </>
    );
    }
  };

  return (
    <div className="container my-0 py-3">
      <div className="row">
        <div className="col-12 mb-2">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        <FilterButtons />
        {loading
        ? <ProductsSkeleton />
        : <AllProducts />
        }
      </div>
    </div>
  );
};

export default ProductList;
