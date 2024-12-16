import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "../../context/ThemeContext";
import s from "./Navigation.module.css";

const Navigation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav>
      <ul
        className={`${s.list} ${theme === "dark" ? s.dark : s.light}`}
      >
        <li className={s.item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Contacts
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            About Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
