import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../featurse/Counter/CounterSlice";
import createTodoSlice  from "../featurse/Todo/TodoSlice";


const Store = configureStore({
    reducer : {
        counter : CounterSlice,
        todoList : createTodoSlice
    }
})

export default Store;