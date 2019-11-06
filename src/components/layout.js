import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/styles.css'

import layoutStyles from './modules/layout.module.css'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout