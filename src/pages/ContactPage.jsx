import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./contactPage.css";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h1>{t("contact.title")}</h1>
      <p>{t("contact.subtitle")}</p>

      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t("contact.form.name")}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t("contact.form.email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t("contact.form.message")}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{t("contact.form.submit")}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
