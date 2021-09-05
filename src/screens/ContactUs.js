import React, { useState, useEffect } from "react"
import { Form, ListGroup, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import useLanguage from "../language/useLanguage"

const countryList = [
  { id: "TR", nameEn: "Turkey", nameTr: "Türkiye" },
  { id: "US", nameEn: "United States of America", nameTr: "Amerika" },
  { id: "GB", nameEn: "United Kingdom", nameTr: "İngiltere" },
  { id: "DE", nameEn: "Germany", nameTr: "Almanya" },
  { id: "SE", nameEn: "Sweden", nameTr: "İsveç" },
  { id: "KE", nameEn: "Kenya", nameTr: "Kenya" },
  { id: "BR", nameEn: "Brazil", nameTr: "Brezilya" },
  { id: "ZW", nameEn: "Zimbabwe", nameTr: "Zimbabve" },
]

const ContactUs = () => {
  const { commonSlice } = useSelector((state) => state)

  const [name, setName] = useState(commonSlice.userInfo.name || "")
  const [email, setEmail] = useState(commonSlice.userInfo.email || "")
  const [mobile, setMobile] = useState("")
  const [country, setCountry] = useState("")
  const [text, setText] = useState("")
  const [selectedCountry, setSelectedCountry] = useState({})

  useEffect(() => {
    if (commonSlice.userInfo.name) {
      setName(commonSlice.userInfo.name)
    }
  }, [commonSlice.userInfo.name])

  const validationEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(value).toLowerCase())
  }
  const validationMobile = (value) => {
    if (value.length > 13) {
      return false
    }
    const re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/gm
    return re.test((value))
  }

  const [emailValid, setEmailValid] = useState(validationEmail(email))

  useEffect(() => {
    if (commonSlice.userInfo.email) {
      setEmail(commonSlice.userInfo.email)
      setEmailValid(validationEmail(commonSlice.userInfo.email))
    }
  }, [commonSlice.userInfo.email])

  const emailOnChange = (e) => {
    setEmail(e.target.value)
    if (validationEmail(e.target.value)) {
      setEmailValid(true)
    } else {
      setEmailValid(false)
    }
  }

  const [mobileValid, setMobileValid] = useState(false)

  const mobileOnChange = (e) => {
    setMobile(e.target.value)
    if (validationMobile(e.target.value)) {
      setMobileValid(true)
    } else {
      setMobileValid(false)
    }
  }

  const save = () => {
    if (mobileValid && emailValid) {
      const data = {
        name,
        email,
        phonenumber: mobile,
        country_code: selectedCountry.id,
        text: "asd",
      }
      console.log(data)
    }
  }

  return (
    <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>{useLanguage("name")}</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder={useLanguage("enterName")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{useLanguage("email")}</Form.Label>
          <Form.Control
            style={{ border: email === "" ? "" : emailValid ? "1px solid green" : "1px solid red" }}
            value={email}
            onChange={(e) => emailOnChange(e)}
            type="email"
            placeholder={useLanguage("enterMail")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>{useLanguage("mobile")}</Form.Label>
          <Form.Control
            style={{ border: mobile === "" ? "" : mobileValid ? "1px solid green" : "1px solid red" }}
            value={mobile}
            onChange={(e) => mobileOnChange(e)}
            type="text"
            placeholder={useLanguage("enterMobile")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCountry">
          <Form.Label>{useLanguage("country")}</Form.Label>
          <Form.Control
            value={country}
            onChange={(e) => {
              setCountry(e.target.value)
              if (countryList.filter((x) => (commonSlice.language === "tr" ? x.nameTr.toLowerCase() : x.nameEn.toLowerCase()) === e.target.value.toLowerCase()).length > 0) {
                console.log("FILTER")
                setSelectedCountry(countryList.filter((x) => (commonSlice.language === "tr" ? x.nameTr.toLowerCase() : x.nameEn.toLowerCase()) === e.target.value.toLowerCase())[0])
              } else {
                console.log("FILTER ELSE")
                setSelectedCountry({})
              }
            }}
            type="text"
            placeholder={useLanguage("chooseCountry")}
          />
          {country.length > 0 && (
            <ListGroup>
              {!selectedCountry.id && countryList.filter((x) => (commonSlice.language === "tr" ? x.nameTr.toLowerCase() : x.nameEn.toLowerCase()).includes(country.toLowerCase())).map((item) => (
                <ListGroup.Item>
                  <Button onClick={() => {
                    setCountry(commonSlice.language === "tr" ? item.nameTr : item.nameEn)
                    setSelectedCountry(item)
                  }}
                  >
                    {commonSlice.language === "tr" ? item.nameTr : item.nameEn}
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>{useLanguage("description")}</Form.Label>
          <Form.Control
            value={text}
            onChange={(e) => setText(e.target.value)}
            as="textarea"
            placeholder={useLanguage("enterDescription")}
          />
        </Form.Group>
        <Button disabled={!(mobileValid && emailValid)} onClick={save}>{useLanguage("send")}</Button>
      </Form>
    </div>
  )
}

export default ContactUs
