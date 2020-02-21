import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import { GoBook } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiMap } from 'react-icons/fi'
import { IoMdImages } from 'react-icons/io'
import SecondaryText from '../Typography/Secondary/SecondaryText';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
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

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
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
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <SecondaryText/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Twoae
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Threeae
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Fourae
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}