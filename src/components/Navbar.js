import React from "react";
import "./../Styles/navbar.css"
import "./MoreInfo.js"
import MoreInfo from "./MoreInfo.js";
import dashtoonLogo from "../assets/dashtoon_logo.png";
export default function Navbar() {

    return (
        <nav>
            <ul className="nav-list">
                <li><img src={dashtoonLogo} width="30" /></li>
                <li>Comic Creator</li>
                <MoreInfo />
            </ul>
        </nav>
    )
}