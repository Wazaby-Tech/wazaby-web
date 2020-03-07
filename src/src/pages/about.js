import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
    <Container style={{color: `teal`}}>
        <Header headerText="About Wazaby" />
        <Footer />
    </Container>
)