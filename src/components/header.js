import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import headerStyles from './modules/header.module.css'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.menutoggle}>
                <Helmet
                    title="Josh Katzenmeyer"
                    description="Freelance web developer, artist, and musician."
                />
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul className={headerStyles.navcontainer}>
                    <li className={headerStyles.nav__list}>
                        <Link to={`/`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>Home</Link>
                    </li>
                    <li className={headerStyles.nav__list}>
                        <Link to={`/about`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>About Me</Link>
                    </li>
                    <li className={headerStyles.nav__list}>
                        <Link to={`/projects`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>My Projects</Link>
                    </li>
                    <li className={headerStyles.nav__list}>
                        <Link to={`/contact`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header