import React from "react";

const Main = ({ h2Text, p1Text, p2Text }) => {
  return (
    <>
      <div className="main-container">
        <div className="main">
          <h2>{h2Text}</h2>
          <p>
            {p1Text}
            <br />
            {p2Text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
