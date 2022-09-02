import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet, Route } from 'react-router-dom';


const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Home
