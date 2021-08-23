import React from 'react';
import ToDoForm from './ToDoForm';
import {RiCloseCircleLine} from "react-icons/ri";
function ToDo({todos,completeTask,removeTask}) {
     return todos.map((todo,index)=> {
         return (<div className={todo.isComplete ? "todo-row-complete" : "todo-row"}
          key={index}>
               <div className="task-item"key={todo.id} onClick={()=> completeTask(todo.id)}>
                    {todo.text}
               </div>
               <div className="icons">
                    <RiCloseCircleLine onClick={()=> removeTask(todo.id)} 
                    className="delete-button"/>
               </div>
          </div>)
     })
}

export default ToDo
