import React from 'react'
import 'firebase/auth';
import firebase from "../Config/firebase-config"
import Pomodoro from './Pomodoro';


function SignOut(props) {
     const auth=props.auth;
     return auth.currentUser && (
          <div className="signout">
          <button onClick={()=> auth.signOut()}>Sign Out</button>
          </div>
     )
}

export default SignOut