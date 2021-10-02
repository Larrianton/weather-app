import React from 'react';
import {RootState} from "../../store/store";
import {useSelector} from "react-redux";
import Alert from "../Alert/Alert";
import {Display} from "../Display/Display";
import Search from "../Search/Search";
import preloader from "../../assets/images/preloader.svg"


export const Weather = () => {
    const weatherData = useSelector((state: RootState) => state.weather.data);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const error = useSelector((state: RootState) => state.weather.error);
    const alertMsg = useSelector((state: RootState) => state.alert.message);
    return (
        <div className="weatherBlock">
            <Search title="Enter city name and press search button" />
            {loading ? <img className="isLoading" src={preloader} alt="preloader"/> : weatherData && <Display data={weatherData} />}

            {alertMsg && <Alert message={alertMsg}/>}
            {error && <Alert message={error}/>}

        </div>
    );

}


