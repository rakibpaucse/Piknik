import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import { TiTicket } from "react-icons/ti";
import { MdEventAvailable } from "react-icons/md";

import SecondaryText from "../../Typography/Secondary/SecondaryText";
import LineBreak from "../../Util/LineBreak/LineBreak";

import banner from "../../../Assets/banner.jpg";


const Summary = ({ style, ammount, type, icon }) => {
  const classes = useStyles();
  return (
    <Box style={style} className={classes.box}>
      {icon}
      <Box className={classes.content}>
        <Typography align="center" className={classes.ammount}>
          {ammount}
        </Typography>
        <Typography className={classes.type}>{type}</Typography>
      </Box>
    </Box>
  );
};

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <Box pb={5} pt={5}>
        <Grid container>
          <Grid item xs={4}>
            <SecondaryText
              primary="About"
              secondary="Know more about the event"
            />
            <LineBreak />
            <Typography style={{ padding: "20px 0" }} variant="h6">
              Making your trip more fun and safe is our mission. Paris Picnic is
              not just traveling in Paris but we also help travelers explore the
              world in an effortless way.
            </Typography>
          </Grid>
          <Grid item xs={8} className={classes.bannerWrapper}>
            <img
              src={banner}
              className={classes.banner}
              alt="Banner of Picnic"
            />
          </Grid>
        </Grid>
      </Box>
      <LineBreak />
      <Box pb={3} pt={8}>
        <Grid container>
          <Grid item sm={3}>
            <Summary
              ammount="4"
              type="Awards"
              style={{ borderRight: '1px solid #ddd' }}
              icon={<TiTicket className={classes.icon} />}
            />
          </Grid>
          <Grid item sm={3}>
            <Summary
              ammount="4"
              type="Awards"
              style={{ borderRight: '1px solid #ddd' }}
              icon={<TiTicket className={classes.icon} />}
            />
          </Grid>
          <Grid item sm={3}>
            <Summary
              ammount="4"
              type="Awards"
              style={{ borderRight: '1px solid #ddd' }}
              icon={<TiTicket className={classes.icon} />}
            />
          </Grid>
          <Grid item sm={3}>
            <Summary
              ammount="4"
              type="Awards"
              icon={<TiTicket className={classes.icon} />}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  bannerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  banner: {
    height: 400,
    width: 700,
    padding: "20px 0px"
  },
  box: {
    padding: '15px 20px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },
  ammount: {
    color: "#FF7335",
    font: '400 50px/50px "Open sans", Arial, sans-serif',
    margin: '-5px 0 5px 0'
  },
  type: {
    color: "#444",
    font: '600 18px/18px "Open sans", Arial, sans-serif',
    textTransform: "uppercase",
    letterSpacing: 2
  },
  icon: {
    fontSize: 140,
    color: "rgba(0, 0, 0, 0.07)"
  }
}));

export default About;
