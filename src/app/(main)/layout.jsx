import BreakkingNews from '@/components/Shared/BreakkingNews';
import Header from '@/components/Shared/Header';
import Navbar from '@/components/Shared/Navbar';
import React from 'react';

const MainlayOut = ({ children }) => {
    return (
        <>
            <Header></Header>
            <BreakkingNews></BreakkingNews>
            <Navbar></Navbar>

            {children}
        </>
    );
};

export default MainlayOut;