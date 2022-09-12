import React, { useState, useContext } from "react";
import { IsAuth } from "../../context";
import { useEffect } from "react";
import "./login.scss"

const Login = () => {
    const [user, setUser] = useState({username: "", password: ""});
    const { auth, setAuth} = useContext(IsAuth);


    const handleSubmit = () => {
        console.log(user.username);
        console.log(user.password);
        if (user.username === "admin" && user.password === "admin") {
            setAuth(true);
            localStorage.setItem("auth", JSON.stringify(true));
        }
    }

    // Different SCSS for pages
    useEffect(() => {
        document.body.classList.add("login");
        return () => document.body.classList.remove("login");
    }, [])

    return (
        <div className="Login">
            <input type="text" name="username" className="input" placeholder="User Name" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
            <input type="password" name="password" className="input" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            <button type="submit" onClick={handleSubmit} className="loginbutton">Login</button>
        </div>
    );
};

export default Login;