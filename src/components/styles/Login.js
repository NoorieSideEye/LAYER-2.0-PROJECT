import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
<<<<<<< HEAD
    loginPageContent: {
        width: "40%",
        margin: "auto",
        "& p": {
            fontSize: "1.5rem",
        },
        '& $notchedOutline': {
            borderColor: 'orange',
          },
        marginTop: "40px"
    },
  
    loginButton: {
        padding: "5px 10px",
        background: "#FFD600",
        border: "1px solid #FFD600",
        position: "relative",
        color: "#000",
        borderRadius: "2px",
        textAlign: "center",
        float: "left",
        cursor: "pointer",
        fontWeight: 500,
        fontFamily: "Rubik, sans-serif",
        fontSize: "1rem",
        width: "20%",
        margin: "auto",
        marginTop: "20px"

    }

=======
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
>>>>>>> be1e35036b07816b36f23fc8cf570b7aa1f79154
}));

export { useStyles };
