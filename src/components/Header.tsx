import { Logo, DarkModeIcon, LightModeIcon } from "../assets";
import { useThemeContext } from "../context/hooks";
import Button from "./Button";
import "./header.css";

const Header = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div className={`header__container ${theme}`}>
      <div className="header__logo-container">
        <span className="header__logo">
          <Logo />
        </span>
        <span className={`header__company-name ${theme}`}>Componento</span>
      </div>
      <div className="header__theme-button">
        <Button
          priorityStyle="secondary"
          onClick={() =>
            setTheme((theme) => (theme === "light" ? "dark" : "light"))
          }
          iconEnd={theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        >
          {theme === "light" ? "Dark" : "Light"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
