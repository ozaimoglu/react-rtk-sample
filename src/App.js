import React from "react"
import { useSelector } from "react-redux"
import "./App.scss"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./screens/Home"
import ContactUs from "./screens/ContactUs"

const App = () => {
  const { commonSlice } = useSelector((state) => state)

  return (
    <div className="App">
      <NavBar />
      <div style={{ padding: "20px" }} className="content-container">
        {commonSlice.currentPage === "app" ? <Home /> : <ContactUs />}
      </div>
      <Footer />
    </div>
  )
}

export default App
