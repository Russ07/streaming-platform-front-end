import "./Header.scss";
function Header() {
    return(
        <header className="header">
            <a>
                <img className="header__logo" src="../../assets/images/brainFlix-logo.svg" />
            </a>
            <div className="header__menu-container">
                <input className="header__search-bar" type="text" placeholder="Search.."/>
                <button className="header__button">
                    <img className="header__button-icon" src="../../assets/icons/upload.svg" />
                    UPLOAD
                </button>
                <img className="header__profile-img" src="../../assets/images/Mohan-murgue.jpg" />
            </div>
        </header>
    );
}