import React from 'react';
import style from './Nav.module.css';
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className={style.navMenu}>
            <NavLink to={"/time"}>Time</NavLink>
            <NavLink to={"/weather"}> Weather </NavLink>
        </div>
    );
}

