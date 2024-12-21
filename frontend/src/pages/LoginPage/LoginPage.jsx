import { useDispatch } from "react-redux";

import { loginThunk } from "../../store/thunks/authThunk.js";

import s from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Login Page</h1>
      <button onClick={() => dispatch(loginThunk())}>Login</button>
    </div>
  );
};

export default LoginPage;
