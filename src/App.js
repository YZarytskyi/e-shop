import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ProductList from "./Components/Products/ProductList";
import { Route, Routes } from "react-router-dom";
import About from "./Components/Home/About";
import Contacts from "./Components/Home/Contacts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/" element={<ProductList />}/>
        <Route path="/about/" element={<About />}/>
        <Route path="/contacts/" element={<Contacts />}/>
      </Routes>
    </>
  );
}

export default App;
