import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import ProductList from "./Components/Products/ProductList";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Product from "./Components/Products/Product";
import Cart from "./Components/Cart";
import "./App.css"
import Checkout from "./Components/Checkout";




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/" element={<ProductList />}/>
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart/" element={<Cart />}/>
        <Route path="/checkout/" element={<Checkout />}/>
        <Route path="/about/" element={<About />}/>
        <Route path="/contacts/" element={<Contacts />}/>
      </Routes>
    </>
  );
}

export default App;
