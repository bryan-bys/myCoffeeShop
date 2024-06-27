import axios from "axios";

export const getAllCoffee = () => {
  return axios.get("https://mycoffeeshop.onrender.com/coffee/api/v1/coffee");
};

export const AddToCart = (product) => {
  return axios.post(
    "https://mycoffeeshop.onrender.com/coffee/api/v1/itemcart/",
    product
  );
};

export const getCart = () => {
  return axios.get("https://mycoffeeshop.onrender.com/coffee/api/v1/itemcart/");
};

export const deleteItem = (id) => {
  return axios.delete(
    `https://mycoffeeshop.onrender.com/coffee/api/v1/itemcart/${id}`
  );
};
