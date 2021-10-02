import React from 'react';
import s from './Greetings.module.css';
import {NavLink} from "react-router-dom";

function Greetings() {
    let curDate = new Date()
    let curTime = curDate.getHours()
    let greetings = ""
    let cssStyle = {
        color: "greenyellow"
    }
    if (curTime >= 6 && curTime <= 12) {
        greetings = "Good Morning"
    } else if (curTime >= 13 && curTime <= 18) {
        greetings = "Good Afternoon"
        cssStyle = {
            color: "yellow"
        }
    } else {
        greetings = "Good Evening"
        cssStyle = {
            color: "red"
        }
    }
    return (
        <div className={s.greetingsBlockWrapper}>
            <div className={s.greetingsBlock}>
                <div className={s.greetingsHeader}>
                    <h1><span style={cssStyle}>{greetings}</span> dear Guest</h1>
                </div>
                <div className={s.greetingsMenu}>
                    <button><NavLink to="/clock">Clock</NavLink></button>
                    <button><NavLink to="/weather">Weather</NavLink></button>
                </div>
            </div>
        </div>

    );
}

export default Greetings;
