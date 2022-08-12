import React from "react";
import slider1 from "../assets/images/slider1.png";
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
            height="595px"
          />
          <Carousel.Caption>
            <h1 className="text-black">PREMIUM BRANDS</h1>
            <p className="fs-6 text-black">CHECK OUT ALL THE TRENDS</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Second slide"
            height="595px"
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
            height="595px"
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

{
  /* <div className="hero">
<Card className="bg-dark text-black border-0">
  <Card.Img src={background} alt="background" height="600px" />
  <Card.ImgOverlay className="d-flex flex-column justify-content-center">
    <Card.Title className="display-3 fw-bolder mb-0">
      NEW SEASON ARRIVALS
    </Card.Title>
    <Card.Text className="lead fs-2">CHECK OUT ALL THE TRENDS</Card.Text>
  </Card.ImgOverlay>
</Card>
<ProductList />
</div> */
}
