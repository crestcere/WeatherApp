import React, {createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const IsAuth = createContext();

export const IsAuthProvider = ({children}) => {
    
    // useEffect(() => {
    //     localStorage.setItem("auth", JSON.stringify(false));
    // }, [typeof(localStorage.getItem("auth") == undefined)])
    
    if (localStorage.getItem("auth") === null) { localStorage.setItem("auth", false); };
    
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));
    
    const navigate = useNavigate();
    
    const value = {
        auth,
        setAuth
    }
    
    useEffect(() => {
        localStorage.setItem("auth", JSON.stringify(auth));
        if (auth === false) {
            navigate("/");
        } else {
            navigate("/home");
        }
    }, [auth])

    return (
        <IsAuth.Provider value={value}>{children}</IsAuth.Provider>
    );
};

export default IsAuth;