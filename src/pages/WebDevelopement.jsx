import '../App.css';
import { Outlet } from "react-router-dom";
import React from 'react';
import Navbar from '../components/Navbar';
import MasterPage from '../components/MasterPage';

const WebDevelopement = () => {   

    return (
        <div className="over-flow-hidden">
           <Navbar />
            <div className="div1 flex-row">
                <MasterPage />
                <Outlet />
            </div>
        </div>
    );
}

export default WebDevelopement; 

