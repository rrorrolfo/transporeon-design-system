import { Logo, DarkModeIcon } from "../assets";
import Button from "./Button";
import "./header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__logo-container">
        <span className="header__logo">
          <Logo />
        </span>
        <span className="header__company-name">Componento</span>
      </div>
      <Button priorityStyle="secondary" iconEnd={<DarkModeIcon />}>
        {" "}
        Dark{" "}
      </Button>
    </div>
  );
};

export default Header;
