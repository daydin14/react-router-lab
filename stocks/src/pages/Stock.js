import React from "react";

function Stock(props) {

  const stock = props.stockData.filter(
    data => data.symbol === props.match.params.symbol
  )[0];

  return (
    <div>
      <h1>Name: {stock.name}</h1>
      <h3>Price: {stock.lastPrice}</h3>
    </div>
  );
}

export default Stock;
