import React from 'react'
import { Link } from 'gatsby'

import footerStyles from './modules/footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>

            <div className={footerStyles.socialicons}>
                <a href="https://www.twitter.com/luxpris" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/luxpris" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.github.com/katze033" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                </a>

                <a href="mailto:joshkatzenmeyer@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-envelope-square"></i>
                </a>
            </div>
            <Link to="/mailinglist" activeClassName={footerStyles.mailingListLink}>Mailing List</Link>
        </footer>
    )
}

export default Footer