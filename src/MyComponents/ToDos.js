import React from 'react'
import ToDoItems from './ToDoItems'

export default function ToDos(props) {
    let myStyle ={
        minHeight:"70vh",
        margin:" 40px auto"
    }
    return (
        <div className="container" style={myStyle}>
        <h2 className="my-3 ">ToDos List</h2>
        {props.todos.length===0? "No ToDos to display" : props.todos.map((todo)=>{
            return <ToDoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        
            })
        
        }

        </div>
    )
}
