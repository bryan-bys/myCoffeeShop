import AddToCartBtn from "./AddToCartBtn";

export function CoffeeBeamCard({ coffee }) {
  return (
    <>
      {coffee.tipo == "bean" ? (
        <div className="coffee-card" key={coffee.id}>
          <img src={coffee.image} alt="img" />
          <h3>{coffee.name}</h3>
          <p>Origen: {coffee.origyn}</p>
          <p>Intensidad: {coffee.intensity}</p>
          <p>€ {coffee.price} - 500g</p>
          <AddToCartBtn data={coffee} />
        </div>
      ) : null}
    </>
  );
}
