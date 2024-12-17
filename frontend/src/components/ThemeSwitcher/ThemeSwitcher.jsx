import { useSelector, useDispatch } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";

import { toggleTheme } from "../../store/slices/themeSlicer";
import s from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`${s.switcher} ${darkMode ? s.dark : s.light}`}>
      <FaSun className={`${s.icon} ${s.sun}`} />
      <input
        type="checkbox"
        id="theme-toggle"
        className={s.checkbox}
        onChange={handleToggleTheme}
        checked={darkMode}
      />
      <label htmlFor="theme-toggle" className={s.label}>
        <span className={s.ball}></span>
      </label>
      <FaMoon className={`${s.icon} ${s.moon}`} />
    </div>
  );
};

export default ThemeSwitcher;
