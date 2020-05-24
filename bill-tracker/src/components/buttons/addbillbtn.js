import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Bill from "../bill";

function Addbill() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const [bill, setBill] = useState([]);

  const addBill = (event) => {
    event.preventDefault();
    setBill(bill.concat(<Bill key={bill.length} />));
  };

  return (
    <div className={classes.root} onClick={addBill}>
      {bill}
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default Addbill;
