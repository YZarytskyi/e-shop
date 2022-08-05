import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const productsApi = {
  getProducts() {
    return instance
      .get("products")
      .then(res => res.data)
      .catch((err) => {
        alert("Something went wrong", err)
      })
  }
}