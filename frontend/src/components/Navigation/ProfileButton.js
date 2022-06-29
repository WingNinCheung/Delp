import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Navigation.css";
import { useHistory } from "react-router-dom";
import "../HomePage/home.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    return history.push("/");
  };

  return (
    <>
      <button className="profile-button" onClick={openMenu}>
        <div>
          <i className="fas fa-user-alt" />
        </div>
      </button>
      {showMenu && (
        <div className="all-list">
          <ul>
            <li className="list">{user.username}</li>
            <li className="list">{user.email}</li>
            <li className="list">
              <button className="logout-button" onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
