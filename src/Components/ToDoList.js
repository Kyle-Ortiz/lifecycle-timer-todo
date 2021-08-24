import React,{useState} from 'react';
import ToDoForm from './ToDoForm';
import ToDo from "./ToDo";
import {useHistory} from "react-router-dom";

function ToDoList() {
     const [todos,setTodos] = useState([]);
     const history = useHistory();

     function addTask (todo) {
          if(!todo.text || /^\s*$/.test(todo.text)){
               return;
          }

          const newTodos = [todo, ...todos];
          fetch('http://localhost:8000/tasks', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    },
               body: JSON.stringify(newTodos),
               })
               .then(response => response.json())
               .then(data => {
               console.log('Success:', data);
               })
               .catch((error) => {
               console.error('Error:', error);
          });
          setTodos(newTodos);
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
          setTodos([...todos].filter((task)=> task.id !== id))
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
