import { useDispatch } from "react-redux";
import { Button } from "antd";
import {UserOutlined} from '@ant-design/icons';

import {logoutThunk } from "../../store/thunks/authThunk.js";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

    return (
      <div className={s.menu}>
        <UserOutlined className={s.icon} />
        <Button
          type="button"
          onClick={() => dispatch(logoutThunk())}
        >
          Logout
        </Button>
      </div>
    );
};

export default UserMenu;