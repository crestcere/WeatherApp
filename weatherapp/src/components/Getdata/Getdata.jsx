import React, {useState, useEffect} from "react";
import axios from "axios";
import apikey from "./apikey";

const GetData = () => {

    const [data, setData] = useState([]);
    
    const apiData = async () => {
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apikey}`);
        console.log("res: ", res);3
        setData(res.data);
    }

    useEffect(() => {
        apiData()
        console.log("data: ", data);
    }, [])

    return (
        <div className="getData">
            
        </div>
    );
};

export default GetData;