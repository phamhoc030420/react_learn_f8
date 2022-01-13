import { useReducer, useState, useRef } from "react";
import { setJob, addJob, deleteJob } from './action'
import reducerTodo, { initTodo } from './reducer'
import logger from "./logger";
//init State
const initState = 0;
//actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down'
//reducer nhan 2 tham so truyen vao no se dua vao action roi se update state thanh state moi
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            {
                return state += 1;

            }
        case DOWN_ACTION:
            {
                return state -= 1;

            }
        default: throw new Error('Action error')
    }
}
// bai 41 todo useReducer

function UseReducer() {

    const [count, dispatch] = useReducer(reducer, initState)
    const [state, dispatchTodo] = useReducer(logger(reducerTodo), initTodo)
    const { job, jobs } = state
    const handleSubmit = () => {
        dispatchTodo(addJob(job))
        dispatchTodo(setJob(''))
        inputRef.current.focus()
    }
    const inputRef = useRef()

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => { dispatch(UP_ACTION) }}>Up</button>
            <button onClick={() => { dispatch(DOWN_ACTION) }}>Down</button>
            <div></div>
            <br></br>
            <h3>Todo</h3>
            <input placeholder="Enter Todo..." value={job} onChange={e => { dispatchTodo(setJob(e.target.value)) }} ref={inputRef} />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((item, index) => (
                    <li key={index}>{item} <span style={{ cursor: 'pointer' }} onClick={() => { dispatchTodo(deleteJob(index)) }}> &times;</span></li>
                ))}


            </ul>
        </>
    )
}
export default UseReducer;