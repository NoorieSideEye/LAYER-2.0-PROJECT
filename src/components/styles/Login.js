import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loginPageContent: {
    width: "40%",
    margin: "auto",
    marginTop: "40px",
    backgroundColor: "black", // Background set to black
    padding: "20px",
    border: "2px solid green", // Border color set to green
    borderRadius: "5px",
  },
  loginButton: {
    padding: "8px 15px",
    background: "green", // Background set to green
    color: "orange", // Text color changed to orange
    borderRadius: "2px",
    cursor: "pointer",
    fontWeight: 500,
    fontFamily: "Rubik, sans-serif",
    fontSize: "1rem",
    width: "100%",
    marginTop: "20px",
  },
  inputField: {
    background: "white", // Background set to white
    color: "orange", // Text color changed to orange
    border: "1px solid green", // Border color set to green
    borderRadius: "2px",
    padding: "8px 12px",
    marginBottom: "20px",
    width: "100%",
    boxSizing: "border-box",
  }
}));

export { useStyles };
