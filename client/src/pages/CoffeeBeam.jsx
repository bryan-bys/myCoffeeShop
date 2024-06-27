import React from "react";
import CoffeeList from "../components/CoffeeList";
import BackgroundVideo from "../components/BackgroundVideo";
import Main from "../components/Main";

const CoffeeBeam = () => {
  const beanH2 = "CAFE EN GRANO",
    beanP1 = "NUESTRA MEJOR SELECCION",
    beanP2 = "EN GRANOS DE CAFE DE TODO EL MUNDO";

  return (
    <>
      <BackgroundVideo />
      <Main h2Text={beanH2} p1Text={beanP1} p2Text={beanP2} />
      <CoffeeList />
    </>
  );
};

export default CoffeeBeam;
