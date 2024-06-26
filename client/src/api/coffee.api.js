import axios from "axios";

export const getAllCoffee = () => {
  return axios.get("http://localhost:8000/coffee/api/v1/coffee");
};

export const AddToCart = (product) => {
  return axios.post("http://localhost:8000/coffee/api/v1/itemcart/", product);
};

export const getCart = () => {
  return axios.get("http://localhost:8000/coffee/api/v1/itemcart/");
};

export const deleteItem = (id) => {
  return axios.delete(`http://localhost:8000/coffee/api/v1/itemcart/${id}`);
};
