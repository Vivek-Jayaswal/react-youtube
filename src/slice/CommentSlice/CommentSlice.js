import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
    name : "comment-details",
    initialState : {
        comment : []
    },
    reducers : {
        addComment : (state,action) => {
            state = action.payload;
        }
    }
})

export const {addComment} = CommentSlice.actions;
export default CommentSlice;
