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
    display: "grid",
    gap: "65px",
  },

  bodyChildContainerOne: {
    background: "#ECF9FF",
    borderRadius: "8px",
    padding: { xs: "0px", lg: "20px" },
    width: "100%",
    margin: "auto",
  },

  moreThanImgChildContainer: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",
    py: "20px",
    px: { xs: "0px", lg: "10px" },
    pl: { lg: "25px" },
    gap: { xs: "35px", lg: "0px" },
  },

  leftContainer: {
    display: "flex",
    flexDirection: "column",
    order: { xs: 2, lg: 0 },
    gap: { xs: "20px", lg: "30px" },
    width: { xs: "90%", sm: "70%", md: "55%", lg: "49%", xl: "44%" },
    alignItems: { lg: "flex-start" },
    textAlign: "left",
    pl: "10px",
  },

  mainHeading: {
    fontSize: { xs: "25px", sm: "30px", md: "33px", lg: "38px" },
    fontWeight: "700",
    color: "#142137",
  },

  paragraph: {
    fontSize: "13px",
    fontWeight: "200",
    color: "#142137",
  },

  btnsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: { xs: "14px", sm: "20px" },
  },

  containedBtn: {
    bgcolor: "#001439",
    color: "white",
    textTransform: "capitalize",
    padding: { sm: "13px 26px" },
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
    width: { xs: "40px", sm: "50px" },
    height: { xs: "40px", sm: "50px" },
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
    width: { xs: "100%", lg: "49%" },
    display: "flex",
    justifyContent: { xs: "center", lg: "flex-end" },
  },

  rightImg: {
    width: { xs: "250px", lg: "460px" },
    height: { xs: "250px", lg: "460px" },
    borderRadius: "50%",
  },

  bodyChildContainerTwo: {
    padding: "10px",
  },

  headingParaContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: { xs: "100%", sm: "70%", md: "50%", lg: "37%", xl: "30%" },
  },

  headingText: {
    fontSize: "25px",
    fontWeight: "700",
  },

  cardsBtnContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  showAllBtnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },

  showAllBtn: {
    color: "black",
    fontSize: "13px",
    textTransform: "capitalize",
  },

  eastIcon: {
    color: "black",
    width: "13px",
    height: "13px",
  },

  cardsContainerOne: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: "25px", lg: "0px" },
    justifyContent: "space-between",
    alignItems: { sm: "center", lg: "strech" },
  },

  bodyChildContainerThree: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: "25px", lg: "0px" },
    justifyContent: "space-between",
    alignItems: { xs: "center", lg: "strech" },
  },

  leftImageContainer: {
    width: { xs: "100%", sm: "100%", md: "48%" },
    display: "grid",
    placeItems: "center",
  },

  cloudStorageImg: {
    width: { xs: "300px", sm: "350px", md: "350px", lg: "400px", xl: "450px" },
    height: { xs: "320px", sm: "350px", md: "350px", lg: "400px", xl: "450px" },
  },

  bodyChildContainerThreeRightContainer: {
    width: { xs: "90%", sm: "80%", md: "48%" },
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "strech", sm: "center", md: "flex-start" },
  },

  bodyChildContainerThreeRightChildContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    // border: "4px solid green",
    width: { xs: "100%", sm: "90%", lg: "80%", xl: "70%" },
  },

  planHighlightsText: {
    fontSize: "12px",
    letterSpacing: "4px",
    color: "#8D67F0",
  },

  headingTextOne: {
    lineHeight: "30px",
  },

  iconTextParentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "11px",
  },

  iconTextChildContainer: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  tickIcon: {
    fontSize: "18px",
    color: "#8D67F1",
  },

  spanText: {
    fontSize: "13px",
    fontWeight: "200",
    color: "#142137",
  },

  bodyChildContainerFour: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: "25px", lg: "0px" },
    justifyContent: "space-between",
    alignItems: { xs: "center", lg: "strech" },
  },

  adjustOrderLeftChildFour: {
    order: { xs: 1, md: 0 },
  },

  adjustCenteRightChildFour: {
    alignSelf: "center",
  },

  bodyChildContainerFive: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },

  headingParagraphContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    alignItems: "center",
    margin: "auto",
    width: { xs: "90%", sm: "90%", md: "70%", lg: "60%", xl: "50%" },
  },

  clientHeading: {
    fontSize: "30px",
    color: "black",
    fontWeight: "800",
  },

  logosContainer: {},

  logosImage: {
    width: { xs: "300px", sm: "550px", md: "700px" },
    height: "300px",
  },

  bodyChildContainerSix: {
    bgcolor: "#02c3fe",
    borderRadius: "15px",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    px: { md: "20px" },
    justifyContent: "center",
    gap: "30px",
    alignItems: { xs: "center", lg: "strech" },
    pb: { xs: "25px", md: "0px" },
  },

  bodyChildContainerSixLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: { xs: "center", lg: "flex-start" },
    justifyContent: "center",
    width: { xs: "90%", sm: "70%", md: "48%", lg: "40%" },
    order: { xs: 1, md: 0 },
  },

  perfectBackupText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: "30px",
    lineHeight: "30px",
  },

  inComputingPara: {
    color: "#ffffff",
    fontWeight: "200",
    fontSize: "13px",
  },

  bodyChildContainerSixRight: {
    width: { xs: "100%", sm: "100%", md: "40%" },
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

  graphImage: {
    width: "250px",
    height: "270px",
    mixBlendMode: "darken",
    color: "black",
    mt: "-40px",
  },

  bodyChildContainerSeven: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  bodyChildContainerSevenTop: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  cardsContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: { sm: "center", md: "strech" },
    gap: { xs: "25px", md: "20px" },
  },

  bodyChildContainerEight: {
    background: "#ecf9ff",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    alignItems: "center",
  },

  headingParagraphContainerEight: {
    display: "grid",
    gap: "20px",
    margin: "auto",
    width: { xs: "100%", sm: "90%", md: "70%", lg: "60%", xl: "50%" },
  },

  imageContentContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: "20px", sm: "30px", md: "100px" },
  },

  profileImg: {
    width: "250px",
    height: "300px",
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: { xs: "100%", sm: "90%", md: "70%", lg: "60%", xl: "50%" },
  },

  textLogoContainer: {
    display: "flex",
    gap: "6px",
    alignItems: "center",
  },

  besnikLogo: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },

  besnikText: {
    fontSize: "17px",
    fontWeight: "600",
    color: "black",
  },

  nameDesignationContainer: {},

  personName: {
    fontSize: "16px",
    color: "black",
    fontWeight: "700",
  },

  personDesignation: {
    fontSize: "13px",
    color: "black",
    fontWeight: "200",
  },

  leftRightBtnsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  BtnContainer: {
    bgcolor: "#ffffff",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
  },

  bodyChildContainerNine: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
  },

  bodyChildContainerTen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  },

  accordionContainer : {

  },

  bodyChildContainerEleven : {
    bgcolor:"#ecf9ff",
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    py: "50px"
  },

  bodyChildContainerElevenChild : {
    width: {xs: "100%", md:"50%"},
    display: "flex",
    flexDirection: "column",
    gap: '20px'
  }
};

export default homeStyles;
