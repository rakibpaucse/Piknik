import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <NavLink>
            <div className="logo"> LOGO </div>
          </NavLink>
        </Grid>
        <Grid item xs={3}>
          <NavLink>
            <div className="event"></div>
          </NavLink>
        </Grid>
        <Grid item xs={3}>
          <NavLink>
            <div className="ticket"></div>
          </NavLink>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
