import { useEffect, useState } from "react";
import CartCard from "../components/CartCard";

const Cart = ({ visible, closeCart, data, handleDelete, itemCartId }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      {visible ? (
        <div className="cart open">
          <button className="close-cart" onClick={closeCart}>
            X
          </button>
          <CartCard
            setTotalPrice={setTotalPrice}
            handleDelete={handleDelete}
            data={data}
            itemCartId={itemCartId}
          />
          <p className="total-price">Precio total {totalPrice}</p>
        </div>
      ) : (
        <div className="cart"></div>
      )}
    </>
  );
};

export default Cart;
