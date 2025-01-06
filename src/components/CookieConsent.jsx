  import { useState, useEffect } from "react";
  import Cookies from "js-cookie";
  import { useTranslation } from "react-i18next";
  import "./CookieConsent.css";

  const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation(); // Підключення перекладу

    useEffect(() => {
      const cookieConsent = Cookies.get("cookieConsent");
      if (!cookieConsent) {
        setIsVisible(true);
      }
    }, []);

    const handleAccept = () => {
      Cookies.set("cookieConsent", "true", { expires: 7 }); // Записуємо в кукі про погодження
      setIsVisible(false); // Приховуємо вікно
    };

    if (!isVisible) return null;

    return (
      <div className="cookie-consent">
        <p>{t("cookies.description")}</p>
        <button onClick={handleAccept}>{t("cookies.button")}</button>
      </div>
    );
  };

  export default CookieConsent;
