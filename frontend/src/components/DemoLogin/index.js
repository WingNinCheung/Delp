import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";

export default function DemoLogin() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("session: ", sessionUser);

  if (sessionUser) {
    history.push("/home");
  } else {
    dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    );
  }
}
