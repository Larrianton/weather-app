import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import s from "./Search.module.css"
import { setAlert } from '../../store/actions/AlertActions';
import { getWeather, setLoading } from '../../store/actions/WeatherActions';

interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(city.trim() === '') {
            return dispatch(setAlert('City is required!'));
        }
        dispatch(setLoading());
        dispatch(getWeather(city))
        dispatch(setAlert(''));
    }

    return(
        <div className={s.searchBlock}>
                    <h1 className="title">{title}</h1>
                    <form onSubmit={submitHandler}>
                        <input
                            type="text"
                            className=""
                            placeholder="Enter city name"
                            style={{maxWidth: 300}}
                            value={city}
                            onChange={changeHandler}
                        />
                        <button>Search</button>
                    </form>
        </div>
    );
}

export default Search;