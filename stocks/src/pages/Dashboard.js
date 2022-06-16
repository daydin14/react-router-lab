import React from "react";
import {Link} from "react-router-dom";

function Dashboard(props) {
  let stockData = props.stockData.map((data,i) => {
    return <Link key={i} to={`/stocks/${data.symbol}`}>
      <li>{data.name}</li>
    </Link>
  })
  return (
    <div>
      <ul>{stockData}</ul>
    </div>
  );
}

export default Dashboard;
