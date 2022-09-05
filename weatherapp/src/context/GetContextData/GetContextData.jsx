import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import apikey from "../../components/Getdata/apikey";

const GetContextData = createContext();

export const DataProvider = ({ children }) => {
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

    const value = {
        data,
        setData
    }

    return (
        <GetContextData.Provider value={value}>{children}</GetContextData.Provider>
    );
};

export default GetContextData;