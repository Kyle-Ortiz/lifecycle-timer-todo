import React from 'react'
import ToDoList from './ToDoList';
import SignOut from './SignOut';
import Pomodoro from './Pomodoro';
import Calendar from './Calendar';

function Hub(props) {
     const auth = props.auth;
     return (
          <div className="dashboard">
               <div className="tiles">
                    <Calendar />
                    <ToDoList />
                    <Pomodoro />
               </div>
               <div className="signout">
                    <SignOut auth={auth}/>
               </div>
               
          </div>
     )
}

export default Hub
