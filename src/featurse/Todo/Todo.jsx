import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './TodoSlice'

const Todo = () => {
    const [msg, setMsg] = useState({
        "message" : ""
    })
    
    const handleStateUpdate = (e) =>{
        setMsg((preValue) => ({
            ...preValue,
            [e.target.name] : e.target.value
        }))
    }

    

    // redux toolkit
    const {todo} = useSelector(state => state.todoList)
    const dispatch = useDispatch()


    const addTodoSubmit = (e)=>{
        e.preventDefault()
        dispatch(addTodo(msg.message))
        setMsg({
            message : ""
        })
    }
    console.log(todo);
  return (
    <div>
        <form onSubmit={addTodoSubmit}>
            <input type="text" name="message" value={msg.message} onChange={handleStateUpdate} placeholder='add Todo'/>
            <button type='submit' >Add</button>
        </form>


        {
            todo && todo.map((data, index) => {
                return(
                    <div className="todoList" style={{display:'flex', justifyContent: 'space-between', padding: '5px', margin: '5px', border : '1px solid #686868', alignItems: 'center', borderRadius:'5px'}}>
                    <div className="todoTxt">{data}</div>
                    <div className="todo-action"><button onClick={() => dispatch(deleteTodo(index))}>✖</button></div>
                </div>
                )
            })
        }
        

        
    </div>
  )
}

export default Todo