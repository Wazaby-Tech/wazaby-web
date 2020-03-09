import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default (props, children) => (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
        <Header headerText={props.headerText} />
        {children}
        <Footer />
    </div>
)