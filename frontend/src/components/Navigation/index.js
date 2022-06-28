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
        <nav className="nav">
          <LoginFormModal />
          <button className="signup" onClick={handleSignup}>
            Sign Up
          </button>
          {/* <NavLink className="signup" to="/signup">
            Sign Up
          </NavLink> */}
          <button className="Demo" onClick={handleDemo}>
            Demo User Login
          </button>
          {/* <NavLink className="demo" exact to="/demo">
            Demo User
          </NavLink> */}
        </nav>
      </>
    );
  }

  return (
    <ul>
      <li>
        {sessionUser ? (
          <NavLink className="nav" exact to="/home">
            Home
          </NavLink>
        ) : (
          <NavLink className="nav" exact to="/">
            Home
          </NavLink>
        )}

        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
