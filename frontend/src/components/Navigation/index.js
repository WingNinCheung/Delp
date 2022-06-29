import React from "react";
import { NavLink, useHistory } from "react-router-dom";
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
        <div className="slash-container">
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

            <button className="demo" onClick={handleDemo}>
              Demo
            </button>
          </nav>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="master-nav">
        {sessionUser ? (
          <div className="home-nav">
            <div className="hometag">
              <NavLink className="home" exact to="/home">
                Home
              </NavLink>
            </div>
            <img
              className="home-icon"
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWeFlxsBhCE3odDMncn4NkRZ-nKrvr7_tF6kYHLSM0uRS1vsohUks1J9ES4cakLYvRpo&usqp=CAU"
            ></img>
          </div>
        ) : null}
      </div>
      <div>{isLoaded && sessionLinks}</div>
    </>
  );
}

export default Navigation;
