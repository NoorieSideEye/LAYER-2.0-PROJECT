import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heading: {
    backgroundColor: "#fff", // Background set to white
    "& p": { // Target nested paragraph element
      fontFamily: "Rubik, sans-serif",
      fontSize: "4rem",
      color: "orange", // Text color changed to orange
      textAlign: "center",
      marginTop: "30px",
      marginBottom: "0px",
      fontWeight: 500
    }
  }
}));

export { useStyles };
