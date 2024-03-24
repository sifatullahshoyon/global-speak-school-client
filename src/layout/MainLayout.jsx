import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import TopBar from '../pages/Home/TopBar/TopBar';

const MainLayout = () => {
    return (
        <div>
            <TopBar />
            <Home />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;