import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { productsApi } from "../../API/api"

const ProductsList = () => {
  const products = useSelector(state => state.allProducts.products)

  const fetchProducts = async () => {
    const response = await productsApi.getProducts()
    console.log(response);
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  console.log(products);

  return(
    <div className="products">
      {products.map( product => <Product product={product} /> )}
    </div>
  );
};

export default ProductsList;