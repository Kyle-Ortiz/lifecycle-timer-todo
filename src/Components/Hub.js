import React from 'react'
import ToDoList from './ToDoList';
import SignOut from './SignOut';

function Hub(props) {
     const auth = props.auth;
     return (
          <div className="dashboard">
               <ToDoList />
               <SignOut auth={auth}/>
          </div>
     )
}

export default Hub
