import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import citiesData from '../cities.json';
import {getUniversity} from "../actions/universityAction";
import {getCities} from "../actions/citiesAction";
import Header from "./header/Header";
import Form from "./form/Form";

const APIUniversity = 'http://universities.hipolabs.com/search?country=United+Kingdom';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCities(citiesData))
    }, []);

    useEffect(() => {
        fetch(APIUniversity)
            .then((res) => res.json())
            .then((data) => {
                dispatch(getUniversity(data))
            })
    }, []);

    return (
        <div className="App">
            <Header />
            <Form />
        </div>
    );
}

export default App;
