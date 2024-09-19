import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [],
}

const homeSlice = createSlice({
    name : "homeSlice",
    initialState ,
    reducers : {
        add : (state, action) => {
            state.product = action.payload;
        }
    }
})

export const {add} = homeSlice.actions;
export default homeSlice;