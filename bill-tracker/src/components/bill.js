import React from "react";

function Bill() {
  return (
    <div>
      <form>
        <input name="bill name" type="text" placeholder="Bill"></input>
        <input name="bill cost" type="text" placeholder="Cost"></input>
        <input name="bill provider" type="text" placeholder="Provider"></input>
        <input name="bill due date" type="text" placeholder="Due Date"></input>
        <input
          name="bill date paid"
          type="text"
          placeholder="Date Paid"
        ></input>
        <input name="bill username" type="text" placeholder="Username"></input>
        <input name="bill password" type="text" placeholder="Password"></input>
        <input
          name="bill information"
          type="text"
          placeholder="Information"
        ></input>
      </form>
    </div>
  );
}

export default Bill;
