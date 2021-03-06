import React from "react"
import Layout from '../components/layout'

import {Link} from 'gatsby'

const RedirectPage = () => {
    return (
        <Layout>
                <h1>Sorry.</h1>
                <p>The page you are looking for has moved. <Link to="/">Click here</Link> to go home.</p>
        </Layout>
    )
}

export default RedirectPage