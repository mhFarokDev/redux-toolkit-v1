import { createSlice } from "@reduxjs/toolkit";



export const createTodoSlice = createSlice({
    name : 'todolist',
    initialState : {
        todo : []
    },
    reducers : {
        addTodo : (state, {type, payload}) =>{
            state.todo.push(payload);
        },
        deleteTodo : (state, {type, payload}) =>{
            state.todo.splice(payload,1)
        }
    }
})

export const {addTodo, deleteTodo} = createTodoSlice.actions;
export default createTodoSlice.reducer;