import React from "react";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
import ProductList from "./Products/ProductList";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="First slide"
            height="595"
            style={{objectFit: 'cover'}}
          />
          <Carousel.Caption>
            <h1>PREMIUM BRANDS</h1>
            <p className="fs-6">CHECK OUT ALL THE TRENDS</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Second slide"
            height="595"
            style={{objectFit: 'cover'}}
          />
          <Carousel.Caption>
            <h1>SALES -50%</h1>
            <p className="">GET SOME INSPIRATION</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="Second slide"
            height="595"
            style={{objectFit: 'cover'}}
          />
          <Carousel.Caption>
            <h1>NEW SEASON ARRIVALS</h1>
            <p>Your chance to buy whatever you want</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ProductList />
    </div>
  );
};

export default Home;