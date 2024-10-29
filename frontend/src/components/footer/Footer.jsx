import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div id="footer-container">
      <p id="footer-text">{t("footer.footerText")}</p>
    </div>
  );
};

export default Footer;
