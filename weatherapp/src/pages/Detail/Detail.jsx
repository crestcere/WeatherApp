import React, { useState, useEffect, useContext } from "react";
import { GetContextData } from "../../context";
import { Link } from "react-router-dom";
import apikey from "../../components/Getdata/apikey";
import axios from "axios";

import "./detail.scss"

const Detail = () => {

    const { data, setData, city, setCity } = useContext(GetContextData);
    
    const [detail, setDetail] = useState([]);

    const detailapiData = async () => {
        const res = await axios
            .get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=tr&APPID=${apikey}&units=metric`);
        console.log("res detail: ", res);    
        if (res.status === 200) {
            setDetail(...[res.data]);
            console.log(detail);
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
            <div className="details">
                {detail.list.map(resp => (
                    <div className="detailss">
                        {console.log("resp", resp)}
                        <div>DT_TXT: {resp.dt_txt}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Detail;