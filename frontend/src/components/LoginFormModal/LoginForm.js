import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const logged = useSelector((state) => state.session.user);
  // console.log(logged);

  if (logged) return <Redirect to="/home" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        console.log("data are ", data);
        if (data && data.errors) {
          setErrors(data.errors);
        }
      }
    );
    // console.log("logged is ", logged);
    // history.push("/home");
    // // if (!errors.length) history.push("/home");
    // console.log(errors);
    // console.log(logged);
  };

  // useEffect(() => {
  //   // if (logged) return <Redirect to="/home" />;
  //   if (logged) {
  //     history.push("/home");
  //   }
  //   console.log("logged is ", logged);
  // }, [logged]);

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
