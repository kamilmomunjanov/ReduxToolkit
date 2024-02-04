import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}



export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const trim = action.payload
            if (trim.todo !== ""){
                state.todos = [...state.todos, trim]
            }
        },
        deleteTodo: (state, action) => {
            const removeTodo = action.payload
            state.todos = state.todos.filter((item, idx) => item.id !== removeTodo.id)
        },
        toggleCompletedTodo: (state,action) => {
            const toggleTodo = state.todos.find(item => item.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed
        }
    }
})

export const {addTodo, deleteTodo, toggleCompletedTodo} = todoSlice.actions
export default todoSlice.reducer