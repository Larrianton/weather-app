import {GET_WEATHER, SET_ERROR, SET_LOADING, WeatherData, WeatherError} from '../types';
import axios from "axios";
import {Dispatch} from "redux";

export const getWeather = (city: string) => {
    return (dispatch: Dispatch) => {
        axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15860a445514fbd8dd267901c057961c`)
            .then((res) => {
                    dispatch({type: GET_WEATHER, payload: res.data})
                }
            )
            .catch((err: WeatherError) => {
                dispatch({type: GET_WEATHER, payload: ""})
                dispatch({type: SET_ERROR, payload: err.response.data.message})
            })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    } as const
}

export const setError = () => {
    return {
        type: SET_ERROR,
        payload: ''
    } as const
}