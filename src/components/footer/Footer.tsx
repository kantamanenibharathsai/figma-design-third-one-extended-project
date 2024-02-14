import { Component } from "react";
import { Box, Grid, List, ListItem, ListSubheader } from "@mui/material";
import Styles from "./Footer.Styles";
import TelegramIcon from "@mui/icons-material/Telegram";

import React from "react";

const Footer = () => {
  return (
    <Box sx={Styles.footer_main}>
      <Grid
        container
        sx={Styles.footer_menus}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2 }}
      >
        <Grid item xs={12} sm={6} md={3} lg={3} xl={2} sx={Styles.gridItemMr}>
          <Box sx={Styles.footer_menu}>
            <List
              subheader={
                <ListSubheader component="div" sx={Styles.list_header}>
                  Besnik
                </ListSubheader>
              }
            >
              <ListItem sx={Styles.list_item}>CONTACT</ListItem>
            </List>

            <List
              subheader={
                <ListSubheader
                  component="div"
                  sx={{
                    ...Styles.list_header,
                    ...Styles.list_header_contact,
                  }}
                >
                  hellobesnik@gmail.com{" "}
                </ListSubheader>
              }
            ></List>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
          <Box sx={Styles.footer_menu}>
            <List
              subheader={
                <ListSubheader component="div" sx={Styles.list_header}>
                  Navigation
                </ListSubheader>
              }
            >
              <ListItem sx={Styles.list_item}>Students</ListItem>
              <ListItem sx={Styles.list_item}>Business</ListItem>
              <ListItem sx={Styles.list_item}>Instructor</ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
          {" "}
          <Box sx={Styles.footer_menu}>
            <List
              subheader={
                <ListSubheader component="div" sx={Styles.list_header}>
                  Resources{" "}
                </ListSubheader>
              }
            >
              <ListItem sx={Styles.list_item}>Design</ListItem>
              <ListItem sx={Styles.list_item}>Study</ListItem>
              <ListItem sx={Styles.list_item}>Marketing</ListItem>
              <ListItem sx={Styles.list_item}>UI/UX</ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
          {" "}
          <Box sx={Styles.footer_menu}>
            <List
              subheader={
                <ListSubheader component="div" sx={Styles.list_header}>
                  Stay up to date
                </ListSubheader>
              }
            >
              <ListItem sx={Styles.list_item}>120/7 Seddon Park,</ListItem>
              <ListItem sx={Styles.list_item}>Auckland, New Zealand</ListItem>
              <ListItem sx={Styles.list_item}>email@gmail.com</ListItem>
              <ListItem sx={Styles.list_item}>(000)012-345</ListItem>
            </List>
            <List
              subheader={
                <ListSubheader component="div" sx={Styles.list_header}>
                  Contact
                </ListSubheader>
              }
            >
              <ListItem sx={{ ...Styles.list_item,  }}>
                <Box sx={Styles.input_box}>
                  <Box
                    component={"input"}
                    type="email"
                    sx={Styles.input}
                    placeholder="Enter email here"
                  />
                  <Box sx={Styles.telegramIconContainer}>
                    <TelegramIcon sx={Styles.arrow} />
                  </Box>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;