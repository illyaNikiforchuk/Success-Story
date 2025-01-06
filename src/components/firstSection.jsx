// Importing necessary libraries
import { useTranslation } from "react-i18next";
import "./firstSection.css"; // Assume custom CSS for styling
import { Link } from "react-router-dom";
const FirstSection = () => {
  const { t } = useTranslation();

  return (
    <section className="financial-opportunities">
      <div className="container">
        <h1 className="title">{t("financialOpportunities.title")}</h1>
        <p className="description">{t("financialOpportunities.description")}</p>
        <Link to="/contacts" className="cta-button">
          {t("financialOpportunities.cta")}
        </Link>
      </div>
    </section>
  );
};

export default FirstSection;
