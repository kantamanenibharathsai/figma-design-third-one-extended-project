import { green } from "@mui/material/colors";

const cardStyles = {
  cardContainer: {
    // border: "2px solid red",
    width: {xs:"100%", sm:"66%", md:"60%", lg:"30%"},
  },

  cardStyle: {
    width: "100%",
    pb: "20px"
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    px: {xs:"18px", sm:"30px", md: "20px", lg: "30px"},
    py: "50px",
    // boxSizing: "border-box"
  },

  avatarImg : {
    width: "50px",
    height: '50px',
    bgcolor: green[500],
  },

  contentContainer : {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  cardHeading: {
    fontSize: "17px",
    fontWeight: "700",
    color: "black",
  },

  cardText: {
    fontSize: "12px",
    fontWeight: "400",
    color: "black",
  },
};

export default cardStyles;
