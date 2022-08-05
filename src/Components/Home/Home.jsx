import React from "react";
import Card from "react-bootstrap/Card";
import background from "../../assets/images/preview.jpg";
import ProductList from "../Products/ProductList";

const Home = () => {
  return (
    <div className="hero">
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
    </div>
  );
};

export default Home;
