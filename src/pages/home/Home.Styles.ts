const homeStyles = {
  mainContainer: {
    mt: "61px",
  },

  bodyContainer: {
    width: "100%",
    mt: "10px",
  },

  bodyChildContainer: {
    width: { xs: "96%", md: "85%", lg: "80%", xl: "70%" },
    margin: "auto",
    mt: "80px",
    // border: "3px solid yellow",
  },

  bodyChildContainerOne: {
    background: "#ECF9FF",
    borderRadius: "8px",
    padding: {xs:"0px", lg:"20px"},
    width: "100%",
    // border: "4px solid green",
    margin: "auto",
  },

  moreThanImgChildContainer: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",
    py:"20px",
    px:{xs:"0px", lg:"10px"},
    pl: {lg:"25px"},
    gap: {xs: "35px", lg: "0px"}
  },

  leftContainer: {
    display: "flex",
    flexDirection: "column",
    order: {xs:2, lg: 1},
    gap: {xs:"20px", lg:"30px"},
    width: {xs:"90%", sm: "70%", md:"55%", lg:"49%"},
    alignItems: {lg:"flex-start"},
    textAlign: "left",
    pl:"10px",
  },

  mainHeading: {
    fontSize: {xs:"25px", sm:"30px", md:"33px", lg:"38px"},
    fontWeight: "700",
    color: "#142137",
  },

  paragraph: {
    fontSize: "15px",
    fontWeight: "200",
    color: "#142137",
  },

  btnsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: {xs:"14px", sm:"20px"},
  },

  containedBtn: {
    bgcolor: "#001439",
    color: "white",
    textTransform: "capitalize",
    padding: {sm:"13px 26px"},
    "&:hover": {
      bgcolor: "#001439",
    },
  },

  watchVideoIconBtnContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  },

  playCircleContainer: {
    bgcolor: "#ffffff",
    borderRadius: "50%",
    width: {xs:"40px", sm:"50px"},
    height: {xs:"40px", sm:"50px"},
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  playArrowIcon: {
    fontSize: "20px",
    color: "#001439",
  },

  watchVideoText: {
    fontSize: "14px",
  },

  rightContainer: {
    width: {xs:"100%", lg:"49%"},
    display: "flex",
    justifyContent: {xs:"center", lg:"flex-end"},
  },

  rightImg: {
    width: {xs:"250px", lg:"460px"},
    height: {xs:"250px", lg:"460px"},
    borderRadius: "50%",
  },

  bodyChildContainerTwo: {
    padding: "10px",
  },

  headingParaContainer : {
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  headingText : {
    fontSize: "29px"
  }
};

export default homeStyles;
