import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/uesrSlice"

export default configureStore({
    reducer: {
        user: userReducer
    }
}) 