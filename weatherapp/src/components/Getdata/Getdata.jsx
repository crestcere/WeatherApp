import React, {useState, useEffect} from "react";
import axios from "axios";
import apikey from "./apikey";

const GetData = () => {

    const [data, setData] = useState([]);
    
    const apiData = async () => {
        const res = await axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&lang=tr&APPID=${apikey}&units=metric`);
        console.log("res: ", res);
        setData(...[res.data]);
    }

    useEffect(() => {
        apiData()
    }, [])
    
    useEffect(() => {
        console.log("data: ", data);
    }, [data]);

    return (
        <div className="getData">
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

export default GetData;