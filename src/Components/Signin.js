import React from 'react';
import firebase from "../Config/firebase-config";
import logo from "../logo.png";


function Signin() {
     const provider = new firebase.auth.GoogleAuthProvider();
     function handleSignIn(e) {
          firebase.auth().signInWithRedirect(provider);
     }
     return (
          <div className="sign-in-ui">
               <div className="header-logo">
                    <img className="sign-in-image" src={logo} alt="Life Cycle Logo" />
                    <h1>Life Cycle</h1>
               </div>
               <h4>Your Productivity Hub</h4>
               <button className="sign-in-out"onClick={handleSignIn}>Sign in with Google</button>
          </div>
     )
}

export default Signin
