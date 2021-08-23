import React from 'react'
import ToDoList from './ToDoList';
import SignOut from './SignOut';
import Pomodoro from './Pomodoro';

function Hub(props) {
     const auth = props.auth;
     return (
          <div className="dashboard">
               <div className="tiles">
               <ToDoList />
               <Pomodoro />
               </div>
               <SignOut auth={auth}/>
          </div>
     )
}

export default Hub
