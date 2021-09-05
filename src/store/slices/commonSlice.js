import { createSlice } from "@reduxjs/toolkit"

const commonSlice = createSlice({
  name: "commonSlice",
  initialState: {
    language: "tr",
    currentPage: "app",
    userInfo: {},
  },
  reducers: {
    changeLanguage: (state, action) => {
      if (action) {
        state.language = action.payload
      } else {
        state.language = state.language === "tr" ? "en" : "tr"
      }
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
})
export const { changeLanguage, setUserInfo, setCurrentPage } = commonSlice.actions
export default commonSlice.reducer
