import React from "react"
import useLanguage from "../language/useLanguage"

const Home = () => (
  <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
    <h2>{useLanguage("homePageTitle")}</h2>
    <p>
      {useLanguage("homePageParagraph")}
    </p>
  </div>
)

export default Home
