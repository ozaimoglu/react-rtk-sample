import { useState, useEffect } from "react"
import TR from "./tr.json"
import EN from "./en.json"
import { store } from "../store/store"

const useLanguage = (word) => {
  const [language, setLanguage] = useState(store.getState().commonSlice.language)

  const listener = () => {
    const changedLanguage = store.getState().commonSlice.language
    setLanguage(changedLanguage)
  }

  useEffect(() => {
    const unsubs = store.subscribe(listener)
    return () => {
      unsubs()
    }
  }, [])

  return language === "tr" ? TR[word] : EN[word]
}

export default useLanguage
