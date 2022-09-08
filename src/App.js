import './App.css';
import { useLogout } from "./hooks/useLogout";
import { useLogin } from "./hooks/useLogin";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

// const { user } = useContext(AuthContext);
// console.log(user);
const App = () => {
  const { logout } = useLogout();
  const { login, isPending } = useLogin();
  const { user } = useContext(AuthContext);
  console.log(user);
  return (  
    <div className="App">
      <button className="btn" onClick={login}>
        {isPending ? "Loading..." : "Login With Github"}
    </button>
      <button className="btn" onClick={logout}>
    Log Out
</button>
    </div>
  );
};

export default App;

