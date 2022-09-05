import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  const history = useHistory();

  const [searchText, setSearchText] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    history.push("/signup");
  };

  const handleDemo = (e) => {
    e.preventDefault();
    history.push("/demo");
  };

  const search = (e) => {
    e.preventDefault();
    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(searchText)) {
      window.alert("Special characters '!@#$%^&*()<>/;'[]' are not allowed");
      setSearchText("");
    } else if (searchText.trim() === "") {
      window.alert("Content can't be empty or all spaces");
      setSearchText("");
    } else {
      setSearchText("");
      history.push(`/search/${searchText}`);
    }
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
            <img
              className="home-icon"
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWeFlxsBhCE3odDMncn4NkRZ-nKrvr7_tF6kYHLSM0uRS1vsohUks1J9ES4cakLYvRpo&usqp=CAU"
            ></img>
            <img
              className="yelp-icon"
              src="https://cdn-icons-png.flaticon.com/512/174/174882.png"
              alt="Delp Icon"
            ></img>
            <div className="hometag">
              <NavLink className="home" exact to="/home">
                Home
              </NavLink>
            </div>
            <div className="add-business">
              <button
                className="add-button"
                onClick={() => history.push("/add-my-business")}
              >
                Add My Business
              </button>
            </div>
            <span className="search-nav">
              <input
                type="text"
                className="search-text"
                placeholder="Search by restaurant's name"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              ></input>
              <button className="magnifying-glass" onClick={search}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </span>
          </div>
        ) : null}
      </div>
      <div>{isLoaded && sessionLinks}</div>
    </>
  );
}

export default Navigation;
