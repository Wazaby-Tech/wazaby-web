import React from "react"
import Layout from "../components/layout"
import profile from "../images/MH_LinkedInProfile.jpg"

export default () => (
    <Layout>
        <h5>History</h5>
        <p>Founded in 2020, Wazaby Tech is a technology consulting company that bridges the divide between technology and the companies it serves. Technology should work for its companies, not make companies bow to its whim. Wazaby strives to deliver technology that works for you.</p>
        <h5>Founder</h5>        
        <img src={profile} alt="Michael Holloway" />
        <p>
            Michael Holloway is an experienced software engineer who has developed solutions for a variety of companies spanning government, entertainment, food, industrial and education industries. He has over 10 years experience working and specializing in Microsoft technologies.
        </p>
    </Layout>
)