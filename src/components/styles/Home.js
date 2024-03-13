import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    marginTop: "40px",
  },
  featuredContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "20px",
    marginBottom: "0px",
  },
  moreButton: {
    color: "orange", // Change to orange
    fontFamily: "Rubik, sans-serif",
  },
  featured: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    "& p": {
      fontFamily: "Rubik, sans-serif",
      fontSize: "3.2rem",
      color: "#fff",
      textAlign: "left",
    },
  },
  currentBid: {
    margin: "30px",
  },
  NFTImage: {
    maxWidth: "350px",
    maxHeight: "350px",
    margin: "0px 30px",
  },
  analysis: {
    maxWidth: "800px",
    maxHeight: "800px",
    margin: "50px 20px",
    borderRadius: "30px",
  },
  NFTFeatures: {
    backgroundColor: "#313131",
    borderRadius: "10px",
    marginTop: "20px",
    "& p": {
      fontSize: "1.1rem",
    },
    "& hr": {
      margin: "10px 0px",
    },
    padding: "25px",
    maxWidth: "650px",
    minWidth: "580px",
  },
  owner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  description: {
    "& p": {
      fontSize: "0.9rem",
    },
  },
  exploreButton: {
    backgroundColor: "orange", // Change to orange
    transition: "0.5s all ease-out",
    "&:hover": {
      backgroundColor: "rgba(255, 214, 0,0.7)", // Orange with opacity
    },
    borderRadius: "30px",
    fontFamily: "Rubik, sans-serif",
    fontSize: "1.1rem",
    textTransform: "capitalize",
    fontWeight: 500,
    padding: "2px 30px",
    marginTop: "20px",
  },
  biddings: {
    marginTop: "20px",
    color: "#fff",
    fontFamily: "Rubik, sans-serif",
  },
  bidNumStyle: {
    fontSize: "1.5rem",
    margin: "10px 0px",
    fontWeight: 500,
    color: "green", // Change to green
  },
  itemsList: {
    "& p": {
      fontFamily: "Rancho, cursive",
      fontSize: "3rem",
      color: "#fff",
      textAlign: "left",
    },
  },
  auctionHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "30px 80px 0px 80px",
  },
  listButton: {
    backgroundColor: "rgba(255, 255, 255,0.08)",
    color: "orange", // Change to orange
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255,0.1)",
    },
    paddingTop: "0px",
  },
}));

export { useStyles };
