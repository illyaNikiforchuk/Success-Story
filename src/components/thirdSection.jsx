import { useTranslation } from "react-i18next";
import "./thirdSection.css";

const ThirdSection = () => {
  const { t } = useTranslation();

  return (
    <div className="investment-success">
      <div className="investment-container">
        <h1>{t("investment_success.title")}</h1>
        <p>{t("investment_success.message")}</p>
        <div className="investment-story">
          <p>{t("investment_success.story")}</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
