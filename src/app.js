import React from 'react'
import Layout from './Layout/Layout'
import { Switch, Route } from 'react-router'
import Home from './Pages/Home'
import Details from './Pages/Details'
import Booking from './Pages/Booking'
import './styles.css';
import { ThemeProvider } from '@material-ui/core'
import theme from './ThemeProvider';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Switch>
                    <Route path="/details" component={Details}/>
                    <Route path="/booking" component={Booking}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Layout>
        </ThemeProvider>
    )
}

export default App
