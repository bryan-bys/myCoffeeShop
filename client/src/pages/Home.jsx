import CoffeeCard from "../components/CoffeeCard";
import Main from "../components/Main";
import BackgroundVideo from "../components/BackgroundVideo";
import Loader from "../components/Loader";

export default function Home({ data, setUpdateCart, loading }) {
  const homeH2 = "PRODUCTOS",
    homeP1 = `BIENVENIDO AL RINCON `,
    homeP2 = `PARA LOS AMANTES DEL CAFE`;

  return (
    <>
      <BackgroundVideo />
      <Main h2Text={homeH2} p1Text={homeP1} p2Text={homeP2} />
      <CoffeeCard loading={loading} setUpdateCart={setUpdateCart} data={data} />
    </>
  );
}
