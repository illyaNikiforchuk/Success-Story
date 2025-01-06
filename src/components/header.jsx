import { useState, useEffect } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Закривати меню при зміні маршруту
  useEffect(() => {
    setIsMenuOpen(false); // Закриваємо меню при зміні маршруту
  }, [location]);

  // Функція для зміни мови
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Змінює мову
  };

  return (
    <header className="header">
      <div className="logo">Success Story</div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">{t("nav.main")}</Link>
          </li>
          <li>
            <Link to="/PrivacyPolicy">{t("nav.Privacy_Policy")}</Link>
          </li>
          <li>
            <Link to="/TermsAndConditions">
              {t("nav.Terms_And_Conditions")}
            </Link>
          </li>
          <li>
            <Link to="/contacts">{t("nav.contacts")}</Link>
          </li>
        </ul>
        <div className="language-switch">
          <button onClick={() => changeLanguage("uk")}>EN</button>
          <button onClick={() => changeLanguage("ru")}>RU</button>
        </div>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
