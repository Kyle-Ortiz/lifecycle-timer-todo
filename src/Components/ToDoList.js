import React,{useState, useEffect} from 'react';
import ToDoForm from './ToDoForm';
import ToDo from "./ToDo";
import {useHistory} from "react-router-dom";

function ToDoList() {
     const [todos,setTodos] = useState([]);
     const history = useHistory();

     useEffect(() => {
          fetch("http://localhost:8000/tasks")
          .then((resp)=> resp.json()
          .then((savedTodos)=> setTodos(savedTodos)))
          
     }, [])
     function addTask (todo) {
          if(!todo.text || /^\s*$/.test(todo.text)){
               return;
          }

          const newTodos = [todo, ...todos];
          setTodos(newTodos);
          fetch('http://localhost:8000/tasks', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    },
               body: JSON.stringify(todo),
               })
               .then(response => response.json())
               .then(data => {
               console.log('Success:', data);
               })
               .catch((error) => {
               console.error('Error:', error);
          });
     }
     function completeTask(id) {
          let updatedTodos = todos.map(todo => {
               if (todo.id === id) {
                    todo.isComplete = !todo.isComplete;
               }
               return todo
          })
          setTodos(updatedTodos);
     }

     function removeTask (id) {
          setTodos([...todos].filter((task)=> task.id !== id));
          fetch(`http://localhost:8000/tasks/${id}`, {
               method: 'DELETE',})
               .then(response => response.json())
               .then(data => {
               console.log('Success:', data);
               })
               .catch((error) => {
               console.error('Error:', error);
          });
     }
     function dClickHandler(event) {
          event.stopPropagation();
          history.push("/tasklist");
     }
     return (
          <div onDoubleClick={(event)=> dClickHandler(event)}className="todo-card">
               <h1 id="task-header">What's on the Agenda?</h1>
               <ToDoForm onSubmit={addTask}/>
               <ToDo 
               todos={todos}
               completeTask={completeTask}
               removeTask={removeTask}/>
          </div>
     )
}

export default ToDoList
