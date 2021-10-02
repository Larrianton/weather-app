import React, {FC} from 'react';
import {WeatherData} from "../../store/types";
import s from "./WeatherDisplay.module.css"

type WeatherDisplayProps = {
    data: WeatherData
}
export const Display: FC<WeatherDisplayProps> = ({data}) => {
    const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (data.main.temp - 273.15).toFixed(2);

    return (
        <div className={s.container}>
            <div className={s.header}>
                <h1 style={{marginBottom: 50}}>{data.name} - {data.sys.country}</h1>
            </div>
            <div className={s.main}>
                    <div className="level-item">
                        <p className="heading">{data.weather[0].description}</p>
                        <p className="title"><img
                            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                            alt="icon-weather"/></p>
                    </div>
                    <div className={s.levelItem}>
                        <p className="heading">temp</p>
                        <div className="title">
                            <p className="mb-2">{data.main.temp}K</p>
                            <p className="mb-2">{fahrenheit}<sup>&#8457;</sup></p>
                            <p>{celsius}<sup>&#8451;</sup></p>
                        </div>
                    </div>
                    <div className={s.levelItem}>
                        <p className="heading">humidity</p>
                        <p className="title">{data.main.humidity}</p>

                    </div>
                    <div className={s.levelItem}>
                        <p className="heading">pressure</p>
                        <p className="title">{data.main.pressure}</p>
                    </div>
                    <div className={s.levelItem}>
                        <p className="heading">wind</p>
                        <p className="title">{data.wind.speed} m/s</p>
                    </div>
            </div>
        </div>
    );
}



