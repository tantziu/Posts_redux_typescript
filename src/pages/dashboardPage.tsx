import React from 'react'
import {Link} from 'react-router-dom'

const DashboardPage = () => 
    <section>
        <h1>Dashboard</h1>

        <Link to="/posts" className="button">
            View posts
        </Link>
    </section>

export default DashboardPage;