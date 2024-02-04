import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://jsonplaceholder.typicode.com/todos'

const initialState = {
    posts:[]
}

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (_, {rejectWithValue, dispatch}) => {
        const res = await axios.get(API)
        dispatch(setPosts(res.data))
    }
)



export const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    },
    extraReducers:  (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})

export const {setPosts} = postsSlice.actions
export default postsSlice.reducer

