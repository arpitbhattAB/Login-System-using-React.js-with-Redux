import React from "react";
import Login from "./Components/Login";
import "./App.css";

import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Logout from "./Components/Logout";

const App = () => {
  const user = useSelector(state => state.user.user);
  console.log(user);



  return <div>{
      user ? <Logout /> : <Login />
    }</div>;
};

export default App;