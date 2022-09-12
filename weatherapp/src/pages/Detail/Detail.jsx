import React, { useState, useEffect, useContext } from "react";
import { GetContextData } from "../../context";
import { Link } from "react-router-dom";

import "./detail.scss"

const Detail = () => {

    const { data, setData, city, setCity } = useContext(GetContextData);
    



    //TODO 48 hours forecast


    // Different SCSS for pages
    useEffect(() => {
        document.body.classList.add("detail");
        return () => document.body.classList.remove("detail");
    }, [])
    return (
        <div className="Detail">
            <div className="data" key={data.name}>
                <div>Name: {data.name}</div>
                <div className="description">Desc: {data.description}</div>
                <div className="temp">Sıcaklık: {data.temp}</div>
                <div className="feels_like">Hissedilen Sıcaklık: {data.feels_like}</div>
                <div className="temp_min">En düşük Sıcaklık: {data.temp_min}</div>
                <div className="temp_max">En yüksek Sıcaklık: {data.temp_max}</div>
                <div className="humidity">Nem: {data.humidity}</div>
                <div className="pressure">Basınç: {data.pressure}</div>
            </div>
            <Link to="/home">
                <button type="button" className="home-button">Home</button>
            </Link>
        </div>
    );
};

export default Detail;