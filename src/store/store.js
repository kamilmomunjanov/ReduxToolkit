import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../features/user/userSlice";
import {todoSlice} from "../features/todo/todoSlice";
import {postsSlice} from "../features/posts/postSlice";


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        todo: todoSlice.reducer,
        post: postsSlice.reducer
    },
})