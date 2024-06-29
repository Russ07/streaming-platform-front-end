import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import buttonIcon from "../../assets/icons/upload.svg";
import profileImg from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <a className="header__link">
        <img className="header__logo" src={logo} />
      </a>
      <div className="header__menu-container-mobile">
        <div className="header__mobile-wrapper">
          <input
            className="header__search-bar header__search-bar-mobile"
            type="text"
            placeholder="&#xf002;  Search"
          />
          <img className="header__profile-img-mobile" src={profileImg} />
        </div>

        <button className="header__button header__button-mobile">
          <img
            className="header__button-icon header__button-icon-mobile"
            src={buttonIcon}
          />
          UPLOAD
        </button>
      </div>

      <div className="header__menu-container">
        <input
          className="header__search-bar"
          type="text"
          placeholder="&#xf002;  Search"
        />
        <button className="header__button header__button">
          <img
            className="header__button-icon"
            src={buttonIcon}
          />
          <span className="header__button-text">UPLOAD</span>
        </button>
        <img className="header__profile-img" src={profileImg} />
      </div>
    </header>
  );
}

export default Header;
