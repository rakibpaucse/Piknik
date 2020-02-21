import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    primary:{
        color: '#333',
        fontWeight: 600,
        fontFamily: '"Open sans", Helvetica, sans-serif',
        letterSpacing: -2,
        fontSize: 90
    },
    sec:{
        font: '400 16px/16px "Architects Daughter", Helvetica, sans-serif',
        color: '#aaa',
        letterSpacing: 1
    }
}))


const PrimaryText = () => {
    const classes = useStyles();

    return (
        <h1 className={classes.primary}>
            Event. <span className={classes.sec}>Know more about the event</span>
        </h1>
    )
}

export default PrimaryText
