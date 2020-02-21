import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    primary:{
        color: '#FF4E00',
        font: '100 70px/70px "Raleway", Helvetica, Arial, sans-serif',
        fontWeight: 100,
        letterSpacing: -2,

    },
    sec:{
        font: '400 16px/48px "Architects Daughter", Helvetica, sans-serif',
        color: '#666',
        display:'block',
        letterSpacing: 1
    }
}))

const SecondaryText = (props) => {
    const classes = useStyles();

    return (
        <h4 className={classes.primary}>
            About
            <span className={classes.sec}>Know more about the Event</span>
        </h4>
    )
}

export default SecondaryText
