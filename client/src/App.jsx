import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CoffeeBeam from "./pages/CoffeeBeam";
import CoffeeCaps from "./pages/CoffeeCaps";
import logo from "./assets/logo.png";
import Cart from "./pages/Cart";
import { getAllCoffee, getCart, deleteItem } from "../src/api/coffee.api";

export function App() {
  const [visible, setVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const showCart = () => {
    setVisible(true);
  };

  const closeCart = () => {
    setVisible(false);
  };

  const [homeCoffeeData, setHomeCoffeeData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [updateCart, setUpdateCart] = useState(false);
  const [itemCartId, setItemCartId] = useState();

  useEffect(() => {
    async function loadCoffee() {
      const res1 = await getAllCoffee();
      const res2 = await getCart();

      setHomeCoffeeData(res1.data);
      setCartData(res2.data);
    }

    loadCoffee();
    setUpdateCart(false);
  }, [updateCart, visible]);

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <nav>
            <Link className="logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              onClick={() => {
                menuActive == false
                  ? setMenuActive(true)
                  : setMenuActive(false);
              }}
              className="links-buttons"
            >
              <i className="fa-solid fa-bars"></i>
              <i className="fa-solid fa-chevron-down down"></i>
            </button>
            <div
              onClick={() => {
                setMenuActive(false);
              }}
              className={
                menuActive == false
                  ? "links-container"
                  : "links-container active"
              }
            >
              <Link to="/">Inicio</Link>
              <Link to="/coffeeBeam">Cafe en Grano</Link>
              <Link to="/coffeeCaps">Cafe en Capsulas</Link>
              <Link style={{ position: "absolute", right: "5%" }}>
                <div className="cart-container"></div>
              </Link>
            </div>
            <button className="cart-button" onClick={showCart}>
              <p>{cartData.length}</p>
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
          </nav>

          <Routes>
            <Route path="/coffeeCaps" element={<CoffeeCaps />} />
            <Route path="/coffeeBeam" element={<CoffeeBeam />} />
            <Route
              path="/"
              element={
                <Home setUpdateCart={setUpdateCart} data={homeCoffeeData} />
              }
            />
          </Routes>
        </BrowserRouter>

        <Cart
          closeCart={closeCart}
          visible={visible}
          data={cartData}
          setUpdateCart={setUpdateCart}
          itemCartId={setItemCartId}
        />
      </div>
    </>
  );
}

export default App;
