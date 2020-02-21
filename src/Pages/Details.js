import React from 'react';
import TabMenu from "../Components/TabMenu/TabMenu"
import { Container } from '@material-ui/core';
import PrimaryText from '../Components/Typography/Primary/PrimaryText';

const Details = () => {
    return (
        <Container fluid style={{padding: '50px 100px'}}>
            <PrimaryText/>
            <TabMenu/>
        </Container>
    )
}

export default Details
