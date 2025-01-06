import { useTranslation } from "react-i18next";
import "./privacyPolicy.css";
const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const sections = t("privacy_policy.sections", { returnObjects: true });

  return (
    <div className="privacy-policy">
      <h1>{t("privacy_policy.title")}</h1>

      <section>
        <h2>{sections.information_gathering}</h2>
        <p>{sections.personal_information}</p>
      </section>
      </div>
  );
};

export default PrivacyPolicy;
