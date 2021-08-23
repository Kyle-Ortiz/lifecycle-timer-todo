import React,{useState} from 'react';
import ToDoForm from './ToDoForm';
import ToDo from "./ToDo";

function ToDoList() {
     const [todos,setTodos] = useState([]);

     function addTask (todo) {
          if(!todo.text || /^\s*$/.test(todo.text)){
               return;
          }

          const newTodos = [todo, ...todos];

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

     return (
          <div className="todo-card">
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
