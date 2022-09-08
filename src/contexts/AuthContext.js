import { authReducer } from "../reducers/authReducer";
import { createContext, useReducer } from "react";

export const AuthContext = createContext();

//   console.log(state)
const AuthContextProvider = ({  const: [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  })}) => {

    return (
      <AuthContext.Provider value={{ ...state, dispatch }}>
        
      </AuthContext.Provider>
    );
  };
  
  export default AuthContextProvider;