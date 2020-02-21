import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoPlay from "react-awesome-slider/dist/autoplay"
import AwsSliderStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss"

import FlipClock from "../Components/FlipClock/FlipClock";
import { Grid, Paper } from "@material-ui/core";
import TextRotator from "../Components/TextRotator/TextRotator";

import logo1 from "../Assets/img1.jpg";
import logo2 from "../Assets/img2.jpg";
import logo3 from "../Assets/img3.jpg";
import logo4 from "../Assets/img4.jpg";

const AutoplaySlider = withAutoPlay(AwesomeSlider);

const Home = () => {
  return (
    // <div style={{position: 'relative'}}>
    // <div style={{position: 'absolute', top:'50%', zIndex: 1000, transform: "translateY(-50%)", width: '100%'}}>

    <div>
      <div>
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={1000} bullets={false} cssModule={[AwsSliderStyles]}>
          <div data-src={logo1} />
          <div data-src={logo2} />
          <div data-src={logo3} />
          <div data-src={logo4} />
        </AutoplaySlider>
      </div>
      <div>
        <Grid container wrap="nowrap" style={{height: '180px'}}>
          <Grid container item justify="center" alignItems="center" xs={6} style={{backgroundColor: '#f39c12'}}>
            <div>
              {/* <FlipClock /> */}
            </div>
          </Grid>
          <Grid item xs={6}>
            <TextRotator/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
