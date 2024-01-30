import { green } from "@mui/material/colors";

const cardStyles = {
  cardContainer: {
    // border: "2px solid red",
    width: { xs: "100%", sm: "66%", md: "60%", lg: "30%" },
  },

  cardThree: {
    boxShadow: "0px",
    width: {xs: "280px", sm:"300px"},
  },

  cardImg: {
    height: "150px",
    borderRadius: "13px",
  },

  contentBtnsContainer : {
    padding: "20px",
    display: 'grid',
    gap: '30px'
  },

  cardActions : {
    // border: "3px solid red"
  },

  borderLessBtn: {
    color: "#F0EBFF",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    textTransform: "capitalize",
  },

  cardText: {
    fontSize: "16px",
    color: "black",
    fontWeight: "600",
  },
};

export default cardStyles;
