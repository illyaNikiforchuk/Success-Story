import { useTranslation } from "react-i18next";
import "./fourthSection.css";
import { Link } from "react-router-dom";

const FourthSection = () => {
  const { t } = useTranslation();

  return (
    <div className="family-planning-success">
      <div className="story-container">
        <h1>{t("family_planning_success.title")}</h1>
        <p className="intro">{t("family_planning_success.intro")}</p>
        <div className="story">
          <p>{t("family_planning_success.story")}</p>
        </div>
        <div className="cta">
          <Link to="/contacts" >{t("family_planning_success.cta")}</Link>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
