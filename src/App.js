import Signin from "./Components/Signin";
import Hub from "./Components/Hub.js"
import {useAuthState} from "react-firebase-hooks/auth"
import firebase from "./Config/firebase-config"
import {Route, BrowserRouter as Router,Link,Switch, useHistory } from "react-router-dom";
import "./index.css"
import ToDoList from "./Components/ToDoList";
import Pomodoro from "./Components/Pomodoro";
import SignOut from "./Components/SignOut";

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const history = useHistory();

  function dClickHandler() {
    history.push("/home");
  }
  return (
    <div className="App" onDoubleClick={dClickHandler}>
      {user ? 
      <Switch>
      <Route path="/home">
        <Hub auth={auth} /> 
      </Route>
      <Route path="/tasklist">
        <ToDoList /> 
        <div className="signout">
          <SignOut auth={auth}/>
        </div>
      </Route>
      <Route path="/timer">
        <Pomodoro /> 
        <div className="signout">
          <SignOut auth={auth}/>
        </div>
      </Route>
      </Switch>
      : <Signin />}
      
    </div>
  );
}

export default App;
