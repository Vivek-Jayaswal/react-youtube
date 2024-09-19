import { createSlice } from "@reduxjs/toolkit";

const ChannelDetailsSlice = createSlice({
    name : "channel-details",
    initialState: {
        details: null,
        loading: false,
        error: null
    },    
    reducers: {
        addChannelDetails: (state, action) => {
            state.details = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }    
})
export const {addChannelDetails,setError,setLoading} = ChannelDetailsSlice.actions;
export default ChannelDetailsSlice;