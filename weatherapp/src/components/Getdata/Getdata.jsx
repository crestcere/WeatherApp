import React, { useState, useEffect } from "react";
import axios from "axios";
import apikey from "./apikey";

const GetData = (city = "Bursa") => {

    const [data, setData] = useState([]);

    const apiData = async () => {
        const res = await axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=tr&APPID=${apikey}&units=metric`);
        //     .then(resp => {
        //         if (resp.status === 200) {setData(...[resp])};
        //         console.log(resp);
        // });
        // console.log("res: ", res);
        // res.data.weather.map(item => (setData(...[item])));
        if (res.status === 200) {
            setData(...[res]);
        }
        // setData(...[res.data]);
    }
    
    useEffect(() => {
        apiData();
    }, [])
    

    useEffect(() => {
        // console.log("data: ", data);
    }, [data]);

    return (
        data
    );
};

export default GetData;