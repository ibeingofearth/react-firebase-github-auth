import { signOut } from "firebase/auth";
import { auth } from "../firebase.js/config";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
const { dispatch } = useContext(AuthContext);


export const useLogout = () => {

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      console.log("user logged out");
    }
    catch (error) {
      console.log(error.message);
    }
  };

  return { logout };
};