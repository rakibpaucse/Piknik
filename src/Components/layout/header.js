import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { TiTicket } from "react-icons/ti";
import { MdEventAvailable } from "react-icons/md";

import logo from "../../Assets/logo2.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 124,
    overflow: 'hidden'
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    height: 120,
    width: 120,
  },
  subMenu: {
    position: "relative",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 120,
    width: 120,
    position: "absolute",
    top: 30,
    left: "50%",
    transform: "translateX(-50%)",
    color: "rgba(255,255,255,0.2)"
  },
  details: {
    backgroundColor: "#e8bb07"
  },
  booking: {
    backgroundColor: "#f39c12"
  },
  menu: {
    color: "#fff",
    fontFamily: "'Open Sans', sans-serif",
    textTransform: "uppercase",
    fontSize: 24,
    letterSpacing: 2,
    fontWeight: 500
  },
  heading:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 25
  },
  primaryHead:{
    fontFamily: "'Roboto Slab', serif",
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: 2,
    color: '#00206a'
  },
  secondaryHead:{
    color: '#d35400',
    fontFamily: "'Courgette', cursive",
    fontSize: 18,
  }
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6} className={classes.logoWrapper}>
          <NavLink to="/">
            <Grid container>
              <Grid item>
                <img className={classes.logo} src={logo} />
              </Grid>
              <Grid item className={classes.heading}>
                <div>
                  <h3 className={classes.primaryHead}>Primeasia University</h3>
                  <h4 className={classes.secondaryHead}>Department of Computer Science & Engineering</h4>
                </div>
              </Grid>
            </Grid>
          </NavLink>
        </Grid>
        <Grid item xs={3}>
          <NavLink to="/details">
            <div className={[classes.subMenu, classes.details].join(" ")}>
              <MdEventAvailable className={classes.icon} />
              <h1 className={classes.menu}>Event Details</h1>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={3}>
          <NavLink to="/booking">
            <div className={[classes.subMenu, classes.booking].join(" ")}>
              <TiTicket className={classes.icon} />
              <h1 className={classes.menu}>Book Tickets</h1>
            </div>
          </NavLink>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
