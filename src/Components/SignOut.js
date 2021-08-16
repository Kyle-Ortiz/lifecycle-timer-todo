import React from 'react'
import 'firebase/auth';
import firebase from "../Config/firebase-config"


function SignOut(props) {
     const auth=props.auth;
     return auth.currentUser && (
          <button onClick={()=> auth.signOut()}>Sign Out</button>
     )
}

export default SignOut