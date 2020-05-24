import React, { useState } from "react";
import Bill from "./bill";
import Addbillbtn from "./buttons/addbillbtn";

const Months = () => {
  const [bill, setBill] = useState([]);

  return (
    <div>
      <h2>Month1</h2>
      <Bill />
      <Addbillbtn />
    </div>
  );
};

export default Months;
