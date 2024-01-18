import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getBox } from "../actions";
import Boton from './boton';
import s from '../styles/interior.module.css';
import NavBar from './navBar';


export default function Patio(){

    const dispatch = useDispatch();
    const box = useSelector((state) => state.box)
    console.log('estos son los box', box)

    useEffect(() => {
        dispatch(getBox())
    },[dispatch])

    return(
        <div>
            <NavBar/>
            <div className={s.buttonGroup}>PATIO</div>
            <div className={s.subtitle}>(Punto de registro 3)</div>
            <div className={s.buttonContainer}>
             {
               box?.map((e) => {
                
                if(e.num < 8)
                    return(
                        <Boton
                            key={e.id}
                            num={e.num}
                        />
                    )
               })
             }
            </div>
        </div>
    )
}