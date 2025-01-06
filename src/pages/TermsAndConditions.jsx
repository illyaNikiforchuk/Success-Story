import { useTranslation } from "react-i18next";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  const { t } = useTranslation();

  const sections = t("terms_conditions.sections", { returnObjects: true });

  return (
    <div className="terms-and-conditions">
      <h1>{t("terms_conditions.title")}</h1>

      <section>
        <h2>{sections.generalInformation.title}</h2>
        <p>{sections.generalInformation.text}</p>
      </section>

      <section>
        <h2>{sections.userObligations.title}</h2>
        <p>{sections.userObligations.text}</p>
      </section>

      <section>
        <h2>{sections.intellectualProperty.title}</h2>
        <p>{sections.intellectualProperty.text}</p>
      </section>

      <section>
        <h2>{sections.limitationOfLiability.title}</h2>
        <p>{sections.limitationOfLiability.text}</p>
      </section>

      <section>
        <h2>{sections.thirdPartyLinks.title}</h2>
        <p>{sections.thirdPartyLinks.text}</p>
      </section>

      <section>
        <h2>{sections.modificationOfTerms.title}</h2>
        <p>{sections.modificationOfTerms.text}</p>
      </section>

      <section>
        <h2>{sections.privacy.title}</h2>
        <p>{sections.privacy.text}</p>
      </section>

      <section>
        <h2>{sections.governingLaw.title}</h2>
        <p>{sections.governingLaw.text}</p>
      </section>

      <section>
        <h2>{sections.contactInformation.title}</h2>
        <p>{sections.contactInformation.text}</p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
