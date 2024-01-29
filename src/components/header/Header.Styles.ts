const headerStyles = {
  appBar: {
    backgroundColor: "#ffffff",
    height: "60px",
  },

  toolbar: {
    width: "90%",
    margin: "auto",
    height: "60px",
  },

  contentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  contentLeftContainer: {
    display: "flex",
    alignItems: "center",
    gap: {xs:"15px", md: "10px", lg: "15px"}
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

  divider : {
    border: "0.3px solid #BABABA",
    height: "40px"
  },

  phoneNumIconContainer: {
    display: "flex",
    alignItems: "center",
    gap: "3px",
  },

  phoneIcon: {
    color: "black",
    fontSize: "20px",
  },

  phoneNumber: {
    fontSize: "15px",
    color: "black",
  },

  contentMiddleContainer: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: {md: "1px", lg:"10px"},
  },

  unorderdList: {
    display: "flex",
    flexDirection : {xs: "column", md: "row"},
    alignItems: "center",
    gap: {xs: "25px", md:"10px"},
  },

  listItem: {},

  nativeSelect : {
    width: {md:'110px'}
  }, 

  getADemoText: {
    fontSize: "15px",
    color: "black"
  },

  hamburgerIcon: {
    display: { xs: "inline", md: "none" },
  },

  contentRightContainer: {
    display: {xs: "none", md: "flex"},
    alignItems: "center",
    gap: "10px",
  },

  loginBtn: {
    border: "none",
    color: "black",
    textTransform: "capitalize",
  },

  getStartedBtn: {
    color: "black",
    textTransform: "capitalize",
    borderColor: "#BABABA"
  },

  drawer: {
    display: { xs: "block", md: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: { xs: "250px", sm: "400px" },
    },
  },

  drawerContainer: {
    textAlign: "center",
    px: "10px"
  },

  xSmallDevicebtnsContainer : {
    display: "flex",
    alignItems: 'center',
    justifyContent: "space-between",
    height: "60px",
    width: '100%'
  },

  xSmallDeviceUlistContainer : {
   mt: "40px"
  }
};

export default headerStyles;
