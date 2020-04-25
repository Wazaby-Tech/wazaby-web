import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
import {iconicHome} from "../images/open-iconic/png/home-2x.png"

export default props => (
    <div id="header" className={headerStyles.header}>
        <h1>{props.headerText}</h1>
        <div id="navigation" className={headerStyles.links}>
            <Link to="/">Home</Link>&nbsp;|&nbsp; 
            <Link to="/services">Services</Link>&nbsp;|&nbsp;
            <Link to="/about">About</Link>&nbsp;|&nbsp;
            <Link to="/contact">Contact</Link>
        </div>
    </div>
)