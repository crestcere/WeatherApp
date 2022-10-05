import React, { useState, useEffect, useContext, useRef } from "react";
import { GetContextData } from "../../context";
// import { Search, GetData } from "../../components";
import { Link } from "react-router-dom";

import "./home.scss";

const Home = () => {

    const { data, setData, city, setCity } = useContext(GetContextData);

    let cities = ""; // For search input onChange event

    // Make count and count with recent 1, 2 and 3
    const count = useRef(1);
    // Set empty string for recent cities for first time.
    useEffect(() => {
        localStorage.setItem(`recent_1`, " ");
        localStorage.setItem(`recent_2`, " ");
        localStorage.setItem(`recent_3`, " ");
    }, []);
    useEffect(() => {
        localStorage.setItem(`recent_${count.current}`, city);
        count.current++
        if (count.current === 4) { count.current = 1; };
    }, [city]);


    // TODO Autocomplete search

    // console.log("datacontext", data);
    // data.map(resp => (console.log("resp: ", resp)));

    // Different SCSS for pages
    useEffect(() => {
        document.body.classList.add("home");
        return () => document.body.classList.remove("home");
    }, [])

    return (
        <div className="Home">
            <div className="left">
                <div className="search">
                    <input type="text" className="search-input" placeholder={city}
                        onChange={
                            (e) => cities = e.target.value}
                    />
                    <button type="submit" className="search-button" onClick={() => { setCity(cities) }}>Search</button>
                </div>
                {/* Set recently searched cities to localStorage */}
                <div className="history">
                    <div className="history-name">Recent cities: </div>
                    <div className="history-buttons">
                        <button id="history_1" className="history-button" onClick={() => { setCity(localStorage.getItem("recent_1")) }}>{localStorage.getItem("recent_1")}</button>
                        <button id="history_2" className="history-button" onClick={() => { setCity(localStorage.getItem("recent_2")) }}>{localStorage.getItem("recent_2")}</button>
                        <button id="history_3" className="history-button" onClick={() => { setCity(localStorage.getItem("recent_3")) }}>{localStorage.getItem("recent_3")}</button>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className="image" src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="WeatherIcon" />
                <div className="data">
                    <div className="data-name">Name: {data.name}</div>
                    <div className="data-description">Desc: {data.description}</div>
                    <div className="data-temp">Sıcaklık: {data.temp}</div>
                    <div className="data-feels_like">Hissedilen Sıcaklık: {data.feels_like}</div>
                    <div className="temp_min">En düşük Sıcaklık: {data.temp_min}</div>
                    <div className="temp_max">En yüksek Sıcaklık: {data.temp_max}</div>
                    <div className="humidity">Nem: {data.humidity}</div>
                    <div className="pressure">Basınç: {data.pressure}</div>
                </div>
                <div className="details-button">
                    <Link to="/details">
                        <button type="button" className="detail-button">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;