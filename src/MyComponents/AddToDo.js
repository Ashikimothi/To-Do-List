import React from 'react'
import {useState} from 'react'


export default function AddToDo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if( !title || !desc){
            alert("Title and Description cannot be blank.")
        }
        else{
          props.addToDo(title,desc);
          setTitle("");
          setDesc("");}
    }
    return (
       <div className="container">
       <h1>Add a ToDo!</h1>
       <form onSubmit={submit}>
       <div className="mb-3" >
         <label htmlFor="title">Add your ToDos here</label>
         <input type="text"  value={title} className="form-control" id="title" onChange={(e)=>{setTitle(e.target.value)}}
         aria-describedby="emailHelp" placeholder="ToDo" />
        
     </div>
     <div className="mb-3">
        <label htmlFor="desc"> Your ToDo Description</label>
        <input type="text" value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="desc" placeholder="Description" />
     </div>
     <button type="submit" className="btn btn-sm btn-success">Submit</button>
       </form>
       </div>
    )
}
