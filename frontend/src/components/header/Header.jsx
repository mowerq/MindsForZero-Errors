import React, { useEffect, useState } from "react";

import "./Header.css";
import logoLight from "../../assets/logo_light.png";
import companyNameLight from "../../assets/appname_light.png";
import {
  setSystemLanguage,
  getSystemLanguage,
} from "../../utils/translation/LanguageUtils";
import { useTranslation } from "react-i18next";
import SidebarMenu from "../sidebarmenu/SidebarMenu";

const Header = ({ scrollY = 0, currentTab, setCurrentTab }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const currentLang = getSystemLanguage();
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 951);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        setStickyHeader(true);
      } else setStickyHeader(false);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 951);
    };

    window.addEventListener("resize", handleResize);
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
      {isMobile ? (
        <>
          <i
            onClick={() => {
              const sidebarmenu = document.getElementById(
                "sidebarmenu-navigation-links"
              );
              console.log(sidebarmenu.style.right);
              sidebarmenu.style.right = 0;
            }}
            className="pi pi-bars menu-icon"
          ></i>
          <SidebarMenu />
        </>
      ) : (
        <div id="sticky-header-navigation-links">
          <button
            onClick={() => setCurrentTab(0)}
            className={
              currentTab === 0
                ? "sticky-header-active-tab"
                : "sticky-header-inactive-tab"
            }
          >
            {t("header.homepage")}
          </button>
          <button
            onClick={() => setCurrentTab(1)}
            className={
              currentTab === 1
                ? "sticky-header-active-tab"
                : "sticky-header-inactive-tab"
            }
          >
            {t("header.aboutUs")}
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
      )}
    </header>
  );
};

export default Header;
