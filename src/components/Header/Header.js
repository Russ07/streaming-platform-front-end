import "./Header.scss";
import logo from '../../assets/images/BrainFlix-logo.svg';
import buttonIcon from '../../assets/icons/upload.svg';
import profileImg from '../../assets/images/Mohan-muruge.jpg';

function Header() {
    return(
        <header className="header">
            <a>
                <img className="header__logo" src={logo} />
            </a>
            <div className="header__menu-container">
                <input className="header__search-bar" type="text" placeholder="Search.."/>
                <button className="header__button">
                    <img className="header__button-icon" src={buttonIcon}/>
                    UPLOAD
                </button>
                <img className="header__profile-img" src={profileImg} />
            </div>
        </header>
    );
}

export default Header;