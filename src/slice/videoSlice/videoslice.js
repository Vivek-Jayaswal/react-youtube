import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name : "video-page-slice",
    initialState : {},
    reducers : {
        addVideo : (state,action) => {
            state = action.payload;
        }
    }
})

const {addVideo} = videoSlice.actions;
export default videoSlice;