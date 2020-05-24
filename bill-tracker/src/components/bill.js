import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Bill() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <form>
        <input name="bill name" type="text" placeholder="Bill"></input>
        <input name="bill cost" type="text" placeholder="Cost"></input>
        <input name="bill provider" type="text" placeholder="Provider"></input>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          placeholderText="Due Date"
          required
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          placeholderText="Date Paid"
          required
        />
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
