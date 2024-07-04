import BackgroundVideo from "../components/BackgroundVideo";
import CoffeeList from "../components/CoffeeList";
import Main from "../components/Main";

const CoffeeCaps = ({ setUpdateCart }) => {
  const capsH2 = "CAFE EN CAPSULAS",
    capsP1 = "NUESTRO MEJOR CAFE",
    capsP2 = "PARA TU MAQUINA ESPRESSO";

  return (
    <>
      <BackgroundVideo />
      <Main h2Text={capsH2} p1Text={capsP1} p2Text={capsP2} />
      <CoffeeList setUpdateCart={setUpdateCart} />
    </>
  );
};

export default CoffeeCaps;
