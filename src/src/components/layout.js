import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
import layoutStyles from "./layout.module.css"

export default ({ children }) => (
    <div className={layoutStyles.layout}>
        <Header headerText="Wazaby Tech" />
        <Container>
            {children}
        </Container>
        <Footer />
    </div>
)