import { configureStore } from "@reduxjs/toolkit"
import commonSlice from "./slices/commonSlice"

export const store = configureStore({
  reducer: { commonSlice },
})
