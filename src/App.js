import Header from "./Components/Header/Header";
import Home from "./Components/Header/Navbar/Home";
import ProductList from "./Components/Products/ProductList";
import { Route, Routes } from "react-router-dom";
import About from "./Components/Header/Navbar/About";
import Contacts from "./Components/Header/Navbar/Contacts";
import Product from "./Components/Products/Product";
import Cart from "./Components/Header/Navbar/Cart";
import "./App.css"
import Checkout from "./Components/Header/Navbar/Checkout";




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
