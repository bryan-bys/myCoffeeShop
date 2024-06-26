import React, { useState } from "react";
import { AddToCart } from "../api/coffee.api";

const AddToCartBtn = ({ data, handleRender }) => {
  const [quantity, setQuantity] = useState(1);
  // const [getCart, setGetCart] = useState(second);

  const handleAddToCart = async () => {
    try {
      const res = await AddToCart({
        coffee: data.id,
        quantity: quantity,
      });
      console.log(res);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }

    // const res = await AddToCart();
    // console.log(res.data[0].coffee.price);
  };

  return (
    <>
      <div className="btn-add">
        <input
          className="quantity"
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => {
            handleAddToCart();
            handleRender();
          }}
        >
          <i className="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
    </>
  );
};

export default AddToCartBtn;
