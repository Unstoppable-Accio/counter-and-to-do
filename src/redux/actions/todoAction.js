import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

// Action creators

// let todo = [
//     {id: 1, item: 'Learn Redux'},
//     {id: 2, item: 'Learn React'},
//     {id: 3, item: 'Learn Node'},
// ]

export const addTodo = (item) => {
    return {
        type: ADD_TODO,
        payload: item
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}