const Styles = {
  footer_main: {
    bgcolor: "white",
    color: "black",
    paddingTop: 8,
  },

  footer_menus: {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
  },
  footer_menu: {},
  gridItemMr: { mr: "auto" },
  list_header: {
    fontWeight: 800,
    fontSize: 20,
    bgcolor: "white",
    color: "black",
    paddingTop: 0,
    paddingBottom: 2,
    lineHeight: 1,
  },
  list_item: {
    paddingBottom: 1,
    paddingTop: 0,
    "&:hover": { textDecoration: "underline" },
  },
  input_box: {
    width: { xs: "70%", sm: "60%", lg: "80%" },
    position: "relative",
    bgcolor: "tomato",
    marginBottom: { xs: "100px", sm: "120px", lg: "150px", xl: "130px" },
    borderRadius: 20,
  },
  input: {
    width: "100%",
    height: 45,
    bgcolor: "#C9EDFB",
    // border: "none",
    borderRadius: 30,
    marginTop: "20px",
    fontSize: 15,
    paddingLeft: 2,
    position: "absolute",
    marginRight: "50px",
  },

  telegramIconContainer : {
      ml: "30px"
  },

  arrow: {
    fontSize: 20,
    fontWeight: 800,
    position: "absolute",
    top: 24,
    right: -48,
    height: 35,
    width: 35,
    padding: 0.5,
    borderRadius: 20,
    bgcolor: "#01C2FE",
    color: " black",
    ml: "30px"
  },

  list_header_contact: {
    fontSize: 15,
    paddingTop: 1,
  },
  copyright_bg: {
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "start", sm: "end" },
    paddingRight: 15,
    paddingLeft: { xs: 7 },
    marginTop: 3,
  },
  copyright: {},
  logo_image: {
    height: 40,
  },
  help_box: {
    bgcolor: "#4C5FD5",
    width: 95,
    height: 42,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "fixed",
    bottom: 15,
    right: 30,
    zIndex: 2,
  },
  question_icon: {
    fontSize: 20,
    marginRight: 1,
  },
  help_p: {
    fontWeight: 800,
    fontSize: 15,
  },
};

export default Styles;
