import { useTranslation } from "react-i18next";
import "./secondSection.css";
const SecondSection = () => {
  const { t } = useTranslation();

  return (
    <div className="savings-success">
      <div className="savings-container">
        <h1>{t("savings_success.title")}</h1>
        <p>{t("savings_success.message")}</p>
        <div className="savings-story">
          <p>{t("savings_success.story")}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
