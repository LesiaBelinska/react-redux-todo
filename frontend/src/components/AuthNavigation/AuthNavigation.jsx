import { NavLink } from "react-router-dom";

import s from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
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