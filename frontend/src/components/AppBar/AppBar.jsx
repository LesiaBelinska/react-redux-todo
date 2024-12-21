import { useSelector } from "react-redux";

import Navigation from "../Navigation/Navigation.jsx";
import AuthNavigation from "../AuthNavigation/AuthNavigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import s from "./AppBar.module.css";

const AppBar = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header className={`${s.header} ${darkMode ? s.dark : s.light}`}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      <ThemeSwitcher />
    </header>
  );
};

export default AppBar;
