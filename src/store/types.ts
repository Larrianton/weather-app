import {setAlert} from "./actions/AlertActions";
import {setError, setLoading} from "./actions/WeatherActions";

export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export type Weather = {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export type WeatherData = {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: {
        speed: number;
        deg: number;
    };
}

export type WeatherError = {
    response:{
        data:{
            cod:string,
            message:string
        }
    }
}

export type WeatherState = {
    data: WeatherData | null;
    loading: boolean;
    error: string;
}

type GetWeatherAction = {
    type: "GET_WEATHER",
    payload: WeatherData
}

type SetLoadingAction = ReturnType<typeof setLoading>
type SetErrorAction = ReturnType<typeof setError>

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export type AlertAction = ReturnType<typeof setAlert>

export type AlertState = {
    message: string;
}