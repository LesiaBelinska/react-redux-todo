import { useDispatch } from "react-redux";
import { Button, ConfigProvider } from "antd";
import { useResponsive } from "antd-style";

import { loginThunk } from "../../store/thunks/authThunk.js";

import s from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
   const { xxl } = useResponsive();

  return (
    <div className={s.container}>
      <ConfigProvider componentSize={xxl ? "large" : "middle"}>
        <Button
          className={s.button}
          type="primary"
          ghost
          onClick={() => dispatch(loginThunk())}
        >
          Login
        </Button>
      </ConfigProvider>
    </div>
  );
};

export default LoginPage;
