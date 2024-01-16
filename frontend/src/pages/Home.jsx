import React from 'react'
import Header from './../components/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import "../css/main.css"

const Home = () => {
    return (
        <div className="site-content-section">
            <main className="site-content">
                <Header />
                <Outlet />
            </main>
            <Footer />

        </div>
    )
}

export default Home