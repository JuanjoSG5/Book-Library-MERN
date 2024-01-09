import React from 'react'
import Header from './../components/Header.jsx';
import { Outlet } from 'react-router-dom';
import "../css/main.css"

const Home = () => {
  return (
    <main className="border-margin">
      <Header />
      <Outlet />
    </main>
  )
}

export default Home