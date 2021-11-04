import "./header.scss";
export default function Header() {
  const onClickToggleMenu = () =>
    document.getElementById("nav-menu").classList.toggle("show");
  return (
    <header>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Issai Mendoza
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home2"
                className="nav__link"
                onClick={onClickToggleMenu}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link"
                onClick={onClickToggleMenu}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className="nav__link"
                onClick={onClickToggleMenu}
              >
                <i className="uil uil-file-info-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                className="nav__link"
                onClick={onClickToggleMenu}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portafolio"
                className="nav__link"
                onClick={onClickToggleMenu}
              >
                <i className="uil uil-scenery nav__icon"></i> Portafolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contactme"
                className="nav__link"
                onClick={onClickToggleMenu}
              >
                <i className="uil uil-message nav__icon"></i> Contact me
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={onClickToggleMenu}
          ></i>
        </div>
        <div className="nav__btns">
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={onClickToggleMenu}
          >
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
