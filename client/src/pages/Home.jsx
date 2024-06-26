import CoffeeCard from "../components/CoffeeCard";
import Main from "../components/main";
import BackgroundVideo from "../components/BackgroundVideo";
import { useState } from "react";

export default function Home({ data, handleRender }) {
  const homeH2 = "PRODUCTOS",
    homeP1 = `BIENVENIDO AL RINCON `,
    homeP2 = `PARA LOS AMANTES DEL CAFE`;

  return (
    <>
      <BackgroundVideo />
      <Main h2Text={homeH2} p1Text={homeP1} p2Text={homeP2} />
      <CoffeeCard handleRender={handleRender} data={data} />
    </>
  );
}
