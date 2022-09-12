import React, { useState, useEffect, useContext, useRef } from "react";
import { GetContextData } from "../../context";
// import { Search, GetData } from "../../components";
import { GetContextDataProvider } from "../../context";
import { Link } from "react-router-dom";

import "./home.scss";

const Home = () => {

    const { data, setData, city, setCity } = useContext(GetContextData);

    const count = useRef(1);

    // const [recent, setRecent] = useState([]);

    let cities = "";

    useEffect(() => {
        // setRecent(...[city]);
        localStorage.setItem(`recent_${count.current}`, city);
        count.current++
        if (count.current === 4) { count.current = 1; };
    }, [city]);

    // useEffect(() => {
    //     console.log("recent", recent);
    // }, [recent])

    // TODO Implement History with localstorage

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
                {/* <form action=""></form> */}
                <input type="text" className="search" placeholder={city} 
                    onChange={
                        (e) => cities = e.target.value} 
                        />
                <button type="submit" className="search-button" onClick={() => {setCity(cities)}}>Search</button>
                <div className="history">
                        <div id="history_1">{localStorage.getItem("recent_1")}</div>
                        <div id="history_2">{localStorage.getItem("recent_2")}</div>
                        <div id="history_3">{localStorage.getItem("recent_3")}</div>
                </div>
            </div>
            <div className="right">
                <img className="image" src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="WeatherIcon" />
                <div className="data">
                    <div>Name: {data.name}</div>
                    <div className="description">Desc: {data.description}</div>
                    <div className="temp">Sıcaklık: {data.temp}</div>
                    <div className="feels_like">Hissedilen Sıcaklık: {data.feels_like}</div>
                </div>
                <Link to="/details">
                    <button type="button" className="detail-button">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;