import AddToCartBtn from "./AddToCartBtn";

const CoffeeCapsCard = ({ coffee }) => {
  return (
    <>
      {coffee.tipo == "cap" ? (
        <div className="coffee-card" key={coffee.id}>
          <img src={coffee.image} alt="" />
          <h3>{coffee.name}</h3>
          <p>Origen: {coffee.origyn}</p>
          <p>Intensidad. {coffee.intensity}</p>
          <p>€ {coffee.price} - 30 Capsulas</p>
          <AddToCartBtn data={coffee} />
        </div>
      ) : null}
    </>
  );
};

export default CoffeeCapsCard;
