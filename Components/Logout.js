import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import {userSliceActions} from "../features/userSlice";

const Logout = () => {

  const user = useSelector(state => state.user.user);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
      
    dispatch(userSliceActions.logout());
  };

  return (
    <form className="logout">
      <h1>
        Welcome, AB <span className="user__name">{user?.name}</span>
      </h1>{" "}
      <button className="logout__button" onClick={(e) => handleLogout(e)}>
        Log out
      </button>
    </form>
  );
};

export default Logout;