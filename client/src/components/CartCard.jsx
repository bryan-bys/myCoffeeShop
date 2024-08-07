import { useState, useEffect } from "react";

const CartCard = ({ data, handleDelete, setTotalPrice, totalPrice }) => {
  useEffect(() => {
    const res = data.map((data) => data.price * data.quantity),
      suma = res.reduce((acumulador, numero) => acumulador + numero, 0);

    console.log(suma);
    setTotalPrice(suma);
  }, [data]);

  return (
    <>
      {data.map((data) => (
        <div key={data.id} className="cart-card">
          <img src={data.image} />

          <div>
            <p>{data.coffee}</p>
            <p style={{ color: "salmon" }}>{data.price * data.quantity} €</p>
            <p>cantidad {data.quantity}</p>
          </div>

          <button
            onClick={() => {
              handleDelete(data.id);
            }}
            name={data.id}
            className="btn-delete"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
    </>
  );
};

export default CartCard;
