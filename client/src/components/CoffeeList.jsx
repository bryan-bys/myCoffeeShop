import { useEffect, useState } from "react";
import { getAllCoffee } from "../api/coffee.api";
import { CoffeeBeamCard } from "./CoffeeBeamCard";
import { useLocation } from "react-router-dom";
import CoffeeCapsCard from "./CoffeeCapsCard";

const CoffeeList = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  useEffect(() => {
    async function loadCoffee() {
      const res = await getAllCoffee();
      console.log(res);
      setCoffeeData(res.data);
    }

    loadCoffee();
  }, []);

  const location = useLocation();

  return (
    <>
      {location.pathname === "/coffeeCaps" ? (
        <div className="coffee-container">
          <div className="coffee-section">
            {coffeeData.map((coffee) => (
              <CoffeeCapsCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </div>
      ) : null}

      {location.pathname === "/coffeeBeam" ? (
        <div className="coffee-container">
          <div className="coffee-section">
            {coffeeData.map((coffee) => (
              <CoffeeBeamCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CoffeeList;
