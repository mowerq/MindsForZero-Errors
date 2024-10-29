import React from "react";
import { useTranslation } from "react-i18next";
import "./SidebarMenu.css";
import {
  getSystemLanguage,
  setSystemLanguage,
} from "../../utils/translation/LanguageUtils";

const SidebarMenu = () => {
  const currentLang = getSystemLanguage();
  const { t } = useTranslation();

  return (
    <div id="sidebarmenu-navigation-links">
      <button
        onClick={() => {
          const sidebarmenu = document.getElementById(
            "sidebarmenu-navigation-links"
          );
          sidebarmenu.style.right = "-150px";
        }}
      >
        <i className="pi pi-arrow-right"></i>
      </button>
      <button>{t("header.homepage")}</button>
      <button>{t("header.aboutUs")}</button>
      <button>{t("header.contact")}</button>
      <button>{t("header.login")}</button>
      <button
        onClick={() => {
          setSystemLanguage(currentLang === "tr" ? "en" : "tr");
          window.location.reload();
        }}
        className="lang-button"
      >
        {" "}
        <i className="pi pi-globe"></i> {currentLang === "tr" ? "EN" : "TR"}
      </button>
    </div>
  );
};

export default SidebarMenu;
