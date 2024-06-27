import { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import { deleteItem } from "../api/coffee.api";

const Cart = ({ visible, closeCart, data, itemCartId, setUpdateCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleDelete = (data) => {
    const confirmacion = window.confirm(
      "Esta seguro de eliminar este elemento del carrito"
    );

    if (confirmacion) {
      deleteItem(data);
      setUpdateCart(true);
    } else {
      setUpdateCart(true);
      return;
    }
  };

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
