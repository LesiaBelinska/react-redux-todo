import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

const Navigation = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <nav>
      <ul className={`${s.list} ${darkMode ? s.dark : s.light}`}>
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
            to="/todo"
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Todo
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/swapi"
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Swapi
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
