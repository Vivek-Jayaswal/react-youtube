import { createSlice } from "@reduxjs/toolkit";

const VideoDetailsSlice = createSlice({
    name : "video-details",
    initialState : {},
    reducers : {
        addDetails : (state,action) => {
            state = action.payload;
        }
    }
})
export const {addDetails} = VideoDetailsSlice.actions;
export default VideoDetailsSlice;