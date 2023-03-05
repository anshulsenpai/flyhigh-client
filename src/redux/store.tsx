import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./sliderSlice"
import userReducer from "./userSlice"


const store = configureStore({
    reducer : {
        slider : sliderReducer,
        user : userReducer
    }
})

export default store