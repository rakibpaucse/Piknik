import React from 'react'
import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    lineBreak: {
        height: 3,
        backgroundColor: '#444',
        marginBottom: 20
    }
}))


const Footer = () => {
    const classes = useStyles();

    return (
        <div>
            <Container fluid style={{padding: '0 100px'}}>
                <div className={classes.lineBreak}></div>
            </Container>
            <Box></Box>
        </div>
    )
}

export default Footer
