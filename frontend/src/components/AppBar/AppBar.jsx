import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import Navigation from "../Navigation/Navigation.jsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import s from "./AppBar.module.css";

const AppBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${s.header} ${theme === "dark" ? s.dark : s.light}`}>
      <Navigation />
      <ThemeSwitcher />
    </header>
  );
};

export default AppBar;
