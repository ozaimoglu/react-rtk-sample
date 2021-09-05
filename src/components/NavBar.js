import React, { useState } from "react"
import {
  Navbar, Container, Nav, NavDropdown, Button, Modal, Form, Dropdown, DropdownButton,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import useLanguage from "../language/useLanguage"
import { changeLanguage, setCurrentPage, setUserInfo } from "../store/slices/commonSlice"

const NavBar = () => {
  const dispatch = useDispatch()
  const [showLoginModal, setShowLoginModal] = useState(false)
  const { commonSlice } = useSelector((state) => state)

  const [name, setName] = useState(commonSlice.userInfo.name)
  const [email, setEmail] = useState(commonSlice.userInfo.email)
  const [password, setPassword] = useState(commonSlice.userInfo.password)

  const saveUser = () => {
    dispatch(setUserInfo({
      name,
      email,
      password,
    }))
    setName("")
    setEmail("")
    setPassword("")
    setShowLoginModal(false)
  }

  return (
    <>
      <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="data:image/png;base64,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"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span className="m-lg-2">
              {useLanguage(commonSlice.currentPage)}
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link onClick={() => dispatch(setCurrentPage("app"))}>{useLanguage("homePage")}</Nav.Link>
              <Nav.Link onClick={() => dispatch(setCurrentPage("contactUs"))}>{useLanguage("contactUs")}</Nav.Link>
              <NavDropdown title={useLanguage("language")} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => { dispatch(changeLanguage("tr")) }}>
                  Türkçe
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => { dispatch(changeLanguage("en")) }}>
                  English
                </NavDropdown.Item>
              </NavDropdown>
              {commonSlice.userInfo.email ? (
                <NavDropdown title={commonSlice.userInfo.name} id="user-nav-dropdown">
                  <NavDropdown.Item disabled style={{ cursor: "default" }}>
                    {commonSlice.userInfo.email}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { console.log("logout") }}>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(setUserInfo({}))
                        setName("")
                        setEmail("")
                        setPassword("")
                      }}
                    >
                      {useLanguage("logout")}
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : <Button onClick={() => setShowLoginModal(true)}>{useLanguage("signIn")}</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{useLanguage("signIn")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{useLanguage("name")}</Form.Label>
              <Form.Control value={name || ""} onChange={(e) => setName(e.target.value)} type="text" placeholder={useLanguage("enterName")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{useLanguage("email")}</Form.Label>
              <Form.Control value={email || ""} onChange={(e) => setEmail(e.target.value)} type="email" placeholder={useLanguage("enterMail")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{useLanguage("password")}</Form.Label>
              <Form.Control value={password || ""} onChange={(e) => setPassword(e.target.value)} type="password" placeholder={useLanguage("enterPassword")} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <DropdownButton style={{ marginRight: "auto" }} id="dropdown-basic-button" title={useLanguage("chooseLanguage")}>
            <Dropdown.Item onClick={() => { dispatch(changeLanguage("tr")) }}>Türkçe</Dropdown.Item>
            <Dropdown.Item onClick={() => { dispatch(changeLanguage("en")) }}>English</Dropdown.Item>
          </DropdownButton>
          <Button variant="primary" onClick={() => { saveUser() }}>
            {useLanguage("save")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NavBar
