import React from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();
    history.push("/signup");
  };

  const handleDemo = (e) => {
    e.preventDefault();
    history.push("/demo");
  };
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <div className="title">Delp!</div>
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/174/174882.png"
          alt="Delp Icon"
        ></img>
        <nav className="nav">
          <LoginFormModal />
          <button className="signup" onClick={handleSignup}>
            Sign Up
          </button>
          <button className="Demo" onClick={handleDemo}>
            Demo
          </button>
        </nav>
      </>
    );
  }

  return (
    <div>
      {sessionUser ? (
        <NavLink className="nav" exact to="/home">
          Home
        </NavLink>
      ) : // (
      //   <NavLink className="nav" exact to="/">
      //     Home
      //   </NavLink>
      // )
      null}
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
