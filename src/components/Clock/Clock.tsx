import React, {useEffect, useState} from 'react';
import style from './Clock.module.css';

const getTwoDigitsString = (num: number) => num < 10 ? "0" + num : num


export const Clock = () => {
    const [state, setState] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setState(new Date())
            console.log("Tick")
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    const secondsString = getTwoDigitsString(state.getSeconds())
    const minutesString = getTwoDigitsString(state.getMinutes())
    const hoursString = getTwoDigitsString(state.getHours())

    return (
        <div className={style.clockBlock}>
            <h1> Current Time : </h1>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>


        </div>
    );
}

