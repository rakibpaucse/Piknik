import React from 'react'
import Header from '../Components/layout/header'
import Footer from '../Components/layout/footer'

const Layout = (props) => {
    return (
        <Header/>
            <main>
                {props.children}
            </main>
        <Footer/>
    )
}

export default Layout
