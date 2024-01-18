import React from "react";
import { Link } from "react-router-dom";
import s from '../styles/navBar.module.css';

export default function NavBar(){
    return(
        <div className={s.navbar}>
            <ul>
                <Link to='/'><li>INTERIOR</li></Link>
                <Link to='/patio'><li>PATIO</li></Link>
                <Link to='/primerpiso'><li>PRIMER PISO</li></Link>
            </ul>
        </div>
    )
}; 