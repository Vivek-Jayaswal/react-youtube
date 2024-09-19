import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../slice/home/homeSlice";
import videoSlice from "../slice/videoSlice/videoslice";
import ChannelDetailsSlice from "../slice/ChannelDetailsSlice/ChannelDetailsSlice";
import VideoDetailsSlice from "../slice/VideoDetails/VideoDetailsSlice";
import CommentSlice from "../slice/CommentSlice/CommentSlice";

const store = configureStore({
    reducer : {
        homeSlice : homeSlice.reducer,
        videoSlice : videoSlice.reducer,
        videodetails : VideoDetailsSlice.reducer,
        channeldetails : ChannelDetailsSlice.reducer,
        comment : CommentSlice.reducer
    }
});

export default store;