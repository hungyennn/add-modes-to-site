import "./style.css";
import React from "react";


export default function Footer(props) {

    return (
        <footer className={props.darkMode ? "dark" : ""}>
            <small>
                Project by{" "}
                <a className="underline-animation" href="https://scrimba.com/learn/learnreact" target="_blank" rel="noreferrer">
                Scrimba
                </a>
                .<br /> Developed by{" "}
                <a className="underline-animation" href="https://www.linkedin.com/in/hungyen666/" target="_blank" rel="noreferrer">
                Hungyen
                </a>
                .
            </small>
        </footer>
    );
}