import React from 'react';
import s from '../styles/interior.module.css';

export default function Boton({num}){
    return(
        <div>
            <div className={s.numberButton}>{num}</div>
        </div>
    )
}