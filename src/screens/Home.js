import React from "react"
import useLanguage from "../language/useLanguage"

const Home = () => (
  <>
    <h2>{useLanguage("homePageTitle")}</h2>
    <p>
      {useLanguage("homePageParagraph")}
    </p>
  </>
)

export default Home
