import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import PropTypes from 'prop-types';

import TabMenu from "../Components/TabMenu/TabMenu"
import PrimaryText from '../Components/Typography/Primary/PrimaryText';
import About from '../Components/Details/About/About';

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
        {value === index && 
            <Box>
                {children}
            </Box>
        }
      </Typography>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
    },
  }));
  
const Details = () => {
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
        <Container fluid style={{padding: '50px 100px'}}>
            <PrimaryText/>
            <TabMenu value={value} handleChange={handleChange} handleChangeIndex={handleChangeIndex}>
                <TabPanel value={value} className={classes.tabPanel} index={0} dir={theme.direction}>
                    <About/>
                </TabPanel>
                <TabPanel value={value} className={classes.tabPanel} index={1} dir={theme.direction}>
                    Item Twoae
                </TabPanel>
                <TabPanel value={value} className={classes.tabPanel} index={2} dir={theme.direction}>
                    Item Threeae
                </TabPanel>
                <TabPanel value={value} className={classes.tabPanel} index={3} dir={theme.direction}>
                    Item Fourae
                </TabPanel>
            </TabMenu>         
        </Container>
    )
}

export default Details
