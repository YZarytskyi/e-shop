import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/ProductsList";
import { Route, Routes } from "react-router-dom";
import About from "./Components/Home/About";
import Contacts from "./Components/Home/Contacts";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Routes>
        <Route path="/products/" element={<Products />}/>
        <Route path="/about/" element={<About />}/>
        <Route path="/contacts/" element={<Contacts />}/>
      </Routes>
    </>
  );
}

export default App;
