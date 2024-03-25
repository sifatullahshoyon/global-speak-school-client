import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import TopBar from '../pages/Home/TopBar/TopBar';
import Navbar from '../components/shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;