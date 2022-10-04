import React, { useState, useEffect, useContext } from "react";
import { GetContextData } from "../../context";
import { Link } from "react-router-dom";
import apikey from "../../components/Getdata/apikey";
import axios from "axios";

import "./detail.scss"

const Detail = () => {

    const { data, setData, city, setCity } = useContext(GetContextData);

    const [detail, setDetail] = useState({ list: [{ main: "", weather: [{ description: "", icon: "" }] }] });

    const detailapiData = async () => {
        const res = await axios
            .get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=tr&APPID=${apikey}&units=metric`);
        // console.log("res detail: ", res);  
        if (res.status === 200) {
            // return res.data;
            setDetail(...[res.data]);
            // console.log(detail);
        }
    }

    useEffect(() => {
        detailapiData();
    }, []);

    useEffect(() => {
        console.log("detail: ", detail);
    }, [detail])



    //TODO 48 hours forecast


    // Different SCSS for pages
    useEffect(() => {
        document.body.classList.add("detail");
        return () => document.body.classList.remove("detail");
    }, [])

    // Render
    return (
        <div className="Detail">
            <Link to="/home">
                <button type="button" className="home-button">Home</button>
            </Link>
            <div className="details" key={Math.random()}>
                {detail.list.map(resp => (
                    <div className="detailss">
                        {/* {console.log("resp", resp)} */}
                        <div>{resp.dt_txt}</div>
                        {/* <div>Weather: {resp.weather[0].description.icon}</div> */}
                        <img className="dimage" src={`http://openweathermap.org/img/wn/${resp.weather[0].icon}@2x.png`} alt="dWeatherIcon" />
                        <div>Desc: {resp.weather[0].description}</div>
                        <div>Feels like: {resp.main.feels_like}</div>
                        <div>Temp: {resp.main.temp}</div>
                        <div>Max Temp: {resp.main.temp_max}</div>
                        <div>Min Temp: {resp.main.temp_min}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Detail;