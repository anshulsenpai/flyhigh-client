import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isActive: boolean;
};

const initialState: InitialState = {
  isActive: false,
};

const sliderSlice = createSlice({
    name: 'isActive',
    initialState,
    reducers : {
        openSlider : (state) => {
            state.isActive = true
        },
        closeSlider : (state) => {
            state.isActive = false
        }
    }
})

export default sliderSlice.reducer
export const {openSlider, closeSlider} = sliderSlice.actions