import { configureStore } from "@reduxjs/toolkit"
import CardsSlice from "./CardsSlice"

export default  configureStore({
    reducer:{
        Cards:CardsSlice
    }
})