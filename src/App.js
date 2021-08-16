import NavBar from "./Components/navBar"
import Signin from "./Components/Signin";
import SignOut from "./Components/SignOut"
import {useAuthState} from "react-firebase-hooks/auth"
import firebase from "./Config/firebase-config"
import "./index.css"

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {user ? <SignOut auth={auth} /> : <Signin />}
    </div>
  );
}

export default App;
