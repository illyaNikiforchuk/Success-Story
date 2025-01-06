// src/Footer.js
import { Link } from "react-router-dom";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Links Section */}
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/PrivacyPolicy" className="footer-link">
                {t("nav.Privacy_Policy")}
              </Link>
            </li>
            <li>
              <Link to="/TermsAndConditions" className="footer-link">
                {t("nav.Terms_And_Conditions")}{" "}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="footer-link">
                {t("nav.contacts")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact-info">
          <h3>{t("footer.contact_us")}</h3>
          <p>
            <strong>{t("footer.email")}</strong> support@strategiesfull.com
          </p>

          <p>
            <strong>{t("footer.address")}</strong> Keizersgracht 424, 1001 AB
            Amsterdam, Netherlands
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2024 Smart Wealth Strategies. All rights reserved</p>
        <p className="footer-disclaimer">
          The information provided on this website is for educational and
          informational purposes only and should not be considered financial
          advice. Past performance does not guarantee future results. Always
          consult a licensed financial advisor before making any investment
          decisions. Smart Wealth Strategies is not responsible for any losses
          incurred from following the information provided on this website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
