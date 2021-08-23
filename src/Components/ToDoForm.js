import React, {useState} from 'react'

function ToDoForm(props) {
     const [input,setInput]=useState("");
     
     function handleChange(e) {
          setInput(e.target.value);
     }
     function handleSubmit(e) {
          e.preventDefault();
         
          props.onSubmit({
               id: Math.floor(Math.random() * 100000),
               text: input
          })
          
          setInput("")
     }
     return (
          <form className="todo-form" onSubmit={handleSubmit}>
               <input id="task-input"type="text" onChange={handleChange}
               placeholder="Add a task" 
               value={input} name="text" className="todo-input"/>
               <button className="todo-button">Add task</button>
          </form>
     )
}

export default ToDoForm
