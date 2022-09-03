import React, {useState, useEffect} from "react";
import axios from "axios";
import apikey from "./apikey";

const GetData = () => {

    const [data, setData] = useState([]);
    
    const apiData = async () => {
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&lang=tr&APPID=${apikey}&units=metric`);
        console.log("res: ", res);
        setData(res.data);
    }

    useEffect(() => {
        apiData()
    }, [])
    
    useEffect(() => {
        console.log("data: ", data);
        console.log("type", typeof(data));
    }, [data]);

    return (
        <div className="getData">
            {/* {data.map(weather => (
                <div className="cityForecast" key={weather.name}>
                        <div className="description">Desc: {weather.description}</div>
                        <div className="temp">Sıcaklık: {weather.temp}</div>
                        <div className="feels_like">Hissedilen Sıcaklık: {weather.feels_like}</div>
                        <div className="temp_min">En düşük Sıcaklık: {weather.temp_min}</div>
                        <div className="temp_max">En yüksek Sıcaklık: {weather.temp_max}</div>
                        <div className="humidity">Nem: {weather.humidity}</div>
                        <div className="pressure">Basınç: {weather.pressure}</div>
                </div>
            ))} */}
        </div>
    );
};

export default GetData;