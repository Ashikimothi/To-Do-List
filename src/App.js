import './App.css';
import Header from './MyComponents/Header'
import {Footer}  from './MyComponents/Footer'
import ToDos from './MyComponents/ToDos'
import AddToDo from './MyComponents/AddToDo'
import React, {useState, useEffect}  from 'react'
import {About} from './MyComponents/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo =[];
  }
  else{
    initTodo =JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("I am OnDelete", todo);
  
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
}
  const addToDo=(title, desc)=>{
    console.log("I am adding this todo.", title, desc)
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
       sno = todos[todos.length-1].sno +1;
      }
      
    const myToDo={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myToDo]);
    console.log(myToDo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const [todos, setTodos] =useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  return (<>
  <Router>
   <Header title="My ToDos List" searchBar= {false} />
   <Switch>     
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddToDo addToDo={addToDo} />
              <ToDos todos={todos} onDelete={onDelete}/>
              </>
            )
           }}>
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>
   
   <Footer/>
   </Router>
   </>
  );
}

export default App;
