import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsApi } from "../../API/api";
import { setProducts } from "../../Redux/Reducers/productReducer";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await productsApi.getProducts();
    dispatch(setProducts(response));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [filterList, setFilterList] = useState(products)

  const filterProduct = (type) => {
    const updatedList = products.filter(x => x.category === type)
    setFilterList(updatedList)
  }
  const FilterButtons = () => {
    return (
      <div className="buttons d-flex justify-content-center mb-2 pb-4">
        <button className="btn btn-outline-dark me-2" onClick={() => setFilterList(products)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelry</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
      </div>
    );
  };


  const AllProducts = () => {
    if(filterList.length !== 0) {
    return (
      <>
        {filterList.map((product) => {
          return(
          <div className="col-md-3 mb-4 cardItem" key={product.id}>
            <Card className="h-100 text-center p-4">
              <Card.Img variant="top" src={product.image} height='250px' />
              <Card.Body>
                <Card.Title className="mb-0">{product.title.substring(0,12)}...</Card.Title>
                <Card.Text className="lead fw-bold">
                  ${product.price}
                </Card.Text>
                <NavLink to={`/products/${product.id}`}>
                <button variant="primary" className="btn btn-outline-dark">Buy Now</button>
                </NavLink>
              </Card.Body>
            </Card>
          </div>
          )
        })}
      </>
    );
    }
    else setFilterList(products)
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
        <AllProducts />
      </div>
    </div>
  );
};

export default ProductList;
