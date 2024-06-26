import "./style.css";
import React from "react";

export default function Main(props) {

    return (
        <main 
            className = {props.darkMode ? "dark" : ""}
            style = {props.darkMode ? {backgroundImage: "url(/images/react-icon-dark.png)"} : {backgroundImage: "url(/images/react-icon-light.png)"}}
        >
            <h1 className="main--title">Fun Facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}