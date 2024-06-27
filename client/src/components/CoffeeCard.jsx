import AddToCartBtn from "./AddToCartBtn";

const CoffeeCard = ({ data, setUpdateCart }) => {
  const handleRender = () => {
    setUpdateCart(true);
  };

  return (
    <>
      <div className="coffee-container">
        <div className="coffee-section">
          {data.map((coffee) => (
            <div className="coffee-card" key={coffee.id}>
              <img src={coffee.image} alt="img" />
              <h3>{coffee.name}</h3>
              <p>Origen: {coffee.origyn}</p>
              <p>Intensidad: {coffee.intensity}</p>
              <p>€ {coffee.price} - 500g</p>
              <AddToCartBtn
                setUpdateCart={setUpdateCart}
                handleRender={handleRender}
                data={coffee}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
