import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {deleteTodo, toggleCompletedTodo} from "../features/todo/todoSlice";

const TodoItem = () => {

    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo.todos)

    return (
        <>
            {
                todo.map(item => (
                    <div key={item.id} className='flex justify-between items-center my-2'>
                        <div className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'
                        onClick={() => {
                            dispatch(toggleCompletedTodo(item.id))
                        }}
                        >
                            Complete
                        </div>
                        <div className={`text-sm ${item.completed ? 'line-through font-medium text-lime-400' : ''}`}>
                            {item.todo}
                        </div>
                        <div className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'
                             onClick={(e) => {
                                 e.stopPropagation()
                                 dispatch(deleteTodo(item))
                             }}
                        >
                            Delete
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default TodoItem
