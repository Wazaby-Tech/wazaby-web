import React from "react"
import { Link } from "gatsby"

export default props => (
    <div id="header">
        <div id="navigation">
            <Link to="/">Home</Link>&nbsp;|&nbsp; 
            <Link to="/about">About</Link>&nbsp;|&nbsp;
            <Link to="/contact">Contact</Link>
        </div>
        <h1>{props.headerText}</h1>
    </div>
)