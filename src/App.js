import NavBar from "./Components/navBar"
import Signin from "./Components/Signin";
import Hub from "./Components/Hub.js"
import {useAuthState} from "react-firebase-hooks/auth"
import firebase from "./Config/firebase-config"
import {Route, BrowserRouter as Router,Link,Switch } from "react-router-dom";
import "./index.css"
import Calendar from "./Components/Calendar";
import ToDoList from "./Components/ToDoList";
import Pomodoro from "./Components/Pomodoro";
import SignOut from "./Components/SignOut";

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  return (
    <Router>
    <div className="App">
      {user ? 
      <Switch>
      <Route path="/home">
        <Hub auth={auth} /> 
      </Route>
      <Route path="/tasklist">
        <ToDoList /> 
      </Route>
      <Route path="/timer">
        <Pomodoro /> 
        <SignOut auth={auth}/>
      </Route>
      </Switch>
      : <Signin />}
      
    </div>
    </Router>
  );
}

export default App;
