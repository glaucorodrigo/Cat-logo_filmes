import React from "react";
import './Header.css';


export default () => {
    return (
        <header>
            <div classname="header--logo">
                <a href="/" >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="logo" />
                </a>
            </div>
        </header>
    );
}