import { ADD_TODO, DELETE_TODO, SET_TODO_INPUT } from "./constants";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})
export const addToDo = payload => ({
    type: ADD_TODO,
    payload
})
export const deleteToDo = payload => ({
    type: DELETE_TODO,
    payload
})