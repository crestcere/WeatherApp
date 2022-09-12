import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import apikey from "../../components/Getdata/apikey";

const GetContextData = createContext();

export const GetContextDataProvider = ({children}) => {
    const [data, setData] = useState({});

    // const [datas, setDatas] = useState([]);

    const [city, setCity] = useState("Ankara");

    const apiData = async () => {
        const res = await axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=tr&APPID=${apikey}&units=metric`);
        console.log("res: ", res);
        if (res.status === 200) {
            // setDatas(res.data);
            setData({
                name: res.data.name,
                description: res.data.weather[0].description,
                icon: res.data.weather[0].icon,
                feels_like: res.data.main.feels_like,
                humidity: res.data.main.humidity,
                pressure: res.data.main.pressure,
                temp: res.data.main.temp,
                temp_max: res.data.main.temp_max,
                temp_min: res.data.main.temp_min
            });
        }
    }

    useEffect(() => {
        apiData();
    }, [city])
    
    // useEffect(() => {
    //     console.log("data: ", datas);
    // }, [datas]);

    const value = {
        data,
        setData,
        city,
        setCity,
        // datas,
        // setDatas
    }

    return (
        <GetContextData.Provider value={value}>{children}</GetContextData.Provider>
    );
};

export default GetContextData;