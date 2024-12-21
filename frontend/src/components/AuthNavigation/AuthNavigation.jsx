import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import s from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <nav className={s.nav}>
      <ul className={`${s.list} ${darkMode ? s.dark : s.light}`}>
        <li className={s.item}>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNavigation;