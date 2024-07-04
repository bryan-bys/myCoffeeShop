import { useEffect, useState } from "react";
import { getAllCoffee } from "../api/coffee.api";
import { CoffeeBeamCard } from "./CoffeeBeamCard";
import { useLocation } from "react-router-dom";
import CoffeeCapsCard from "./CoffeeCapsCard";
import Loader from "./Loader";

const CoffeeList = ({ setUpdateCart }) => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadCoffee() {
      try {
        const res = await getAllCoffee();
        console.log(res);
        setCoffeeData(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    loadCoffee();
  }, []);

  const location = useLocation();

  return (
    <>
      {location.pathname === "/coffeeCaps" ? (
        <div className="coffee-container">
          <div className="coffee-section">
            {loading ? (
              <Loader />
            ) : (
              coffeeData.map((coffee) => (
                <CoffeeCapsCard
                  setUpdateCart={setUpdateCart}
                  key={coffee.id}
                  coffee={coffee}
                />
              ))
            )}
          </div>
        </div>
      ) : null}

      {location.pathname === "/coffeeBeam" ? (
        <div className="coffee-container">
          <div className="coffee-section">
            {loading ? (
              <Loader />
            ) : (
              coffeeData.map((coffee) => (
                <CoffeeBeamCard
                  setUpdateCart={setUpdateCart}
                  key={coffee.id}
                  coffee={coffee}
                />
              ))
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CoffeeList;
