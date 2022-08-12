import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import ProductList from "./Components/Products/ProductList";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Product from "./Components/Products/Product";
import Cart from "./Components/Cart";
import "./App.css";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="content">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<ProductList />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="/about/" element={<About />} />
          <Route path="/contacts/" element={<Contacts />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/register/" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
