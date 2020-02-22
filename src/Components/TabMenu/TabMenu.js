import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab} from '@material-ui/core';
import { GoBook } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiMap } from 'react-icons/fi'
import { IoMdImages } from 'react-icons/io'

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  tabs: {
    backgroundColor: '#fff'
  },
  tab: {
    fontFamily: "'Open Sans', sans-serif" , 
    fontWeight: 600,
    letterSpacing: 2,
    fontSize: 12,
    padding : 16,
  },
  iconStyle : {
    color: '#e58e26',
    fontSize : '50px',
    padding: 5
  }
}));

const FullWidthTabs = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.tabs}
        >
          <Tab icon={<GoBook className={classes.iconStyle}/>} className={classes.tab} label="ABOUT"  {...a11yProps(0)} />
          <Tab icon={<AiOutlineClockCircle className={classes.iconStyle}/>} className={classes.tab}  label="SCHEDULE" {...a11yProps(1)} />
          <Tab icon={<FiMap className={classes.iconStyle}/>} className={classes.tab}  label="VENUE" {...a11yProps(2)} />
          <Tab icon={<IoMdImages className={classes.iconStyle}/>} className={classes.tab}  label="GALLERY" {...a11yProps(3)} />

        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={props.value}
        onChangeIndex={props.handleChangeIndex}
      >
        {props.children}
      </SwipeableViews>
    </div>
  );
}

export default FullWidthTabs;