import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { logoutThunk } from "../../store/thunks/authThunk.js";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`${s.menu} ${darkMode ? s.dark : s.light}`}>
      <Button
        className={s.button}
        type="text"
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </Button>
      <UserOutlined className={s.icon} />
    </div>
  );
};

export default UserMenu;
