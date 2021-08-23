import NavBar from "./Components/navBar"
import Signin from "./Components/Signin";
import Hub from "./Components/Hub.js"
import {useAuthState} from "react-firebase-hooks/auth"
import firebase from "./Config/firebase-config"
import "./index.css"

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {user ? <Hub auth={auth} /> : <Signin />}
    </div>
  );
}

export default App;
