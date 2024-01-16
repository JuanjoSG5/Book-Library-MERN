import React from 'react'
import Header from './../components/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import "../css/main.css"

const Home = () => {
    return (
        <main >
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Home