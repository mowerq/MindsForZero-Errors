import React, { useEffect, useState } from "react";

import "./Header.css";
import logoLight from "../../assets/logo_light.png";
import companyNameLight from "../../assets/appname_light.png";
import {
  setSystemLanguage,
  getSystemLanguage,
} from "../../utils/translation/LanguageUtils";
import { useTranslation } from "react-i18next";

const Header = ({ scrollY = 0 }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [currentLang, setCurrentLang] = useState(getSystemLanguage());
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        setStickyHeader(true);
      } else setStickyHeader(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      style={{ display: stickyHeader ? "flex" : "none" }}
      id="sticky-header"
    >
      <div id="logo-and-name">
        <img className="header-img" src={logoLight} />
        <img className="header-img" src={companyNameLight} />
      </div>
      <div id="sticky-header-navigation-links">
        <button
          onClick={() => setCurrentTab(0)}
          className={
            currentTab === 0
              ? "sticky-header-active-tab"
              : "sticky-header-inactive-tab"
          }
        >
          {t("header.features")}
        </button>
        <button
          onClick={() => setCurrentTab(1)}
          className={
            currentTab === 1
              ? "sticky-header-active-tab"
              : "sticky-header-inactive-tab"
          }
        >
          {t("header.about-us")}
        </button>
        <button
          onClick={() => setCurrentTab(2)}
          className={
            currentTab === 2
              ? "sticky-header-active-tab"
              : "sticky-header-inactive-tab"
          }
        >
          {t("header.contact")}
        </button>
        <button
          onClick={() => setCurrentTab(3)}
          className={
            currentTab === 3
              ? "sticky-header-active-tab"
              : "sticky-header-inactive-tab"
          }
        >
          {t("header.login")}
        </button>
        <button
          onClick={() => {
            setSystemLanguage(currentLang === "tr" ? "en" : "tr");
            window.location.reload();
          }}
          className="lang-button"
        >
          <i className="pi pi-globe"></i> {currentLang === "tr" ? "EN" : "TR"}
        </button>
      </div>
    </header>
  );
};

export default Header;
