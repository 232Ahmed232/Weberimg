import React from 'react';
import { Outlet } from 'react-router-dom';

function Img(props) {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Img;