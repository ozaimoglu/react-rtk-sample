import React from "react"
import { Container, Navbar } from "react-bootstrap"
import useLanguage from "../language/useLanguage"

const Footer = () => (
  <Navbar style={{ height: "5vh" }} variant="dark" bg="dark" fixed="bottom">
    <Container className="justify-content-end">
      <Navbar.Text>{useLanguage("rightReserved")}</Navbar.Text>
    </Container>
  </Navbar>
)

export default Footer
