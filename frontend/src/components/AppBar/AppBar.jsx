import { useSelector } from "react-redux";

import Navigation from "../Navigation/Navigation.jsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import s from "./AppBar.module.css";

const AppBar = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <header className={`${s.header} ${darkMode ? s.dark : s.light}`}>
      <Navigation />
      <ThemeSwitcher />
    </header>
  );
};

export default AppBar;
