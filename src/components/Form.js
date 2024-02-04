import React from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../features/todo/todoSlice";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [state, setState] = React.useState("")
    const dispatch = useDispatch()

    const addTodos = () => {

        const todo = {
            id: uuidv4(),
            todo: state,
            completed: false
        }
        dispatch(addTodo(todo))
        setState("")
}

    return (
        <form className='w-full flex' onSubmit={(e) => {
            e.preventDefault()
            addTodos()
        }}>
            <input
                type='text'
                placeholder='Type something...'
                value={state}
                onChange={(e) => {
                    setState(e.target.value)
                }}
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            >
                Submit
            </button>
        </form>
    )
}

export default Form
