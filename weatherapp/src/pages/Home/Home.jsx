import React, {useState, useEffect, useContext} from "react";
import { GetContextData } from "../../context";
import { Search } from "../../components";

const Home = () => {
    const {data , setData} = useContext(GetContextData);
    // TODO Implement Search

    // TODO Implement History with localstorage

    return (
        <div className="Home">
            <input type="text" className="search" />
            <Search />
            <div className="Data">Data</div>
            <div className="cityForecast" key={data.name}>
                    <div className="description">Desc: {data.weather.description}</div>
                    <div className="temp">Sıcaklık: {data.main.temp}</div>
                    <div className="feels_like">Hissedilen Sıcaklık: {data.main.feels_like}</div>
                    <div className="temp_min">En düşük Sıcaklık: {data.main.temp_min}</div>
                    <div className="temp_max">En yüksek Sıcaklık: {data.main.temp_max}</div>
                    <div className="humidity">Nem: {data.main.humidity}</div>
                    <div className="pressure">Basınç: {data.main.pressure}</div>
            </div> 
        </div>
    );
};

export default Home;