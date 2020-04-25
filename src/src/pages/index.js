import React from "react"
import Layout from "../components/layout"
import banner from "../images/home_banner.jpg"
import indexStyles from "./index.module.css"

export default () => (
<Layout>    
    <img src={banner} className={indexStyles.banner} alt="Home Banner" />
    <p>Wazaby helps technology work for you.</p>
</Layout>
)
