import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    primary:{
        color: '#FF4E00',
        font: '100 70px/70px "Raleway", Helvetica, Arial, sans-serif',
        fontWeight: 100,
        letterSpacing: -2,
        padding: '40px 0'
    },
    sec:{
        font: '400 16px/48px "Architects Daughter", Helvetica, sans-serif',
        color: '#666',
        display:'block',
        letterSpacing: 1
    }
}))

const SecondaryText = ({primary,secondary}) => {
    const classes = useStyles();

    return (
        <h4 className={classes.primary}>
            {primary}
            <span className={classes.sec}>{secondary}</span>
        </h4>
    )
}

export default SecondaryText
