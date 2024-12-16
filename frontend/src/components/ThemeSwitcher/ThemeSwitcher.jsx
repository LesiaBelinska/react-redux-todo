import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import { ThemeContext } from "../../context/ThemeContext";
import s from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${s.switcher} ${theme === "dark" ? s.dark : s.light}`}>
      <FaSun className={`${s.icon} ${s.sun}`} />
      <input
        type="checkbox"
        id="theme-toggle"
        className={s.checkbox}
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label htmlFor="theme-toggle" className={s.label}>
        <span className={s.ball}></span>
      </label>
      <FaMoon className={`${s.icon} ${s.moon}`} />
    </div>
  );
};

export default ThemeSwitcher;
