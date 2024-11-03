import "./App.css";
import logoDark from "./assets/logo_dark.png";
import companyNameDark from "./assets/appname_dark.png";
import peopleTable from "./assets/peopleTable.png";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { useTranslation } from "react-i18next";
import {
  setSystemLanguage,
  getSystemLanguage,
} from "./utils/translation/LanguageUtils";
import SidebarMenu from "./components/sidebarmenu/SidebarMenu";
import Footer from "./components/footer/Footer";
import geminiLogo from "./assets/gemini_logo.png";

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const { t } = useTranslation();
  const currentLang = getSystemLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 951);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 951);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="landing-page">
      <Header
        scrollY={600}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div id="greeting">
        <header id="greeting-header">
          <div id="logo-and-name">
            <img className="header-img" src={logoDark} />
            <img className="header-img" src={companyNameDark} />
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
            <div id="header-navigation-links">
              <button
                onClick={() => setCurrentTab(0)}
                className={currentTab === 0 ? "active-tab" : "inactive-tab"}
              >
                {t("header.homepage")}
              </button>
              <button
                onClick={() => setCurrentTab(1)}
                className={currentTab === 1 ? "active-tab" : "inactive-tab"}
              >
                {t("header.aboutUs")}
              </button>
              <button
                onClick={() => setCurrentTab(2)}
                className={currentTab === 2 ? "active-tab" : "inactive-tab"}
              >
                {t("header.contact")}
              </button>
              <button
                onClick={() => setCurrentTab(3)}
                className={currentTab === 3 ? "active-tab" : "inactive-tab"}
              >
                {t("header.login")}
              </button>
              <button
                style={{}}
                onClick={() => {
                  setSystemLanguage(currentLang === "tr" ? "en" : "tr");
                  window.location.reload();
                }}
                className="lang-button"
              >
                {" "}
                <i className="pi pi-globe"></i>{" "}
                {currentLang === "tr" ? "EN" : "TR"}
              </button>
            </div>
          )}
        </header>
        <div id="greeting-content">
          <img id="greeting-img" src={peopleTable} />
          <div id="greeting-texts">
            <h1 style={{ lineHeight: "2.7rem" }}>
              {t("landingPage.greeting.title")}
            </h1>
            <p>{t("landingPage.greeting.description")}</p>
          </div>
        </div>
      </div>
      <div id="landingpage-other-content">
        {currentTab === 0 && (
          <>
            <h1 className="landingpage-h1">{t("landingPage.features")}</h1>
            <div id="landingpage-features">
              <div className="landingpage-feature">
                <img
                  src={geminiLogo}
                  alt=""
                  className="landingpage-feature-img"
                />
                <div className="landingpage-feature-content">
                  <h2>Gemini AI</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, sapiente iste neque repellendus temporibus impedit
                    voluptas quas ipsa dolor quo quos reprehenderit aliquid, ab
                    itaque exercitationem debitis ex necessitatibus! Accusantium
                    necessitatibus dolorem ullam, exercitationem mollitia animi.
                    Esse autem dicta ducimus.
                  </p>
                </div>
              </div>
              <div className="landingpage-feature">
                <img
                  src={geminiLogo}
                  alt=""
                  className="landingpage-feature-img"
                />
                <div className="landingpage-feature-content">
                  <h2>Gemini AI</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, sapiente iste neque repellendus temporibus impedit
                    voluptas quas ipsa dolor quo quos reprehenderit aliquid, ab
                    itaque exercitationem debitis ex necessitatibus! Accusantium
                    necessitatibus dolorem ullam, exercitationem mollitia animi.
                    Esse autem dicta ducimus.
                  </p>
                </div>
              </div>
              <div className="landingpage-feature">
                <img
                  src={geminiLogo}
                  alt=""
                  className="landingpage-feature-img"
                />
                <div className="landingpage-feature-content">
                  <h2>Gemini AI</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, sapiente iste neque repellendus temporibus impedit
                    voluptas quas ipsa dolor quo quos reprehenderit aliquid, ab
                    itaque exercitationem debitis ex necessitatibus! Accusantium
                    necessitatibus dolorem ullam, exercitationem mollitia animi.
                    Esse autem dicta ducimus.
                  </p>
                </div>
              </div>
              <div className="landingpage-feature">
                <img
                  src={geminiLogo}
                  alt=""
                  className="landingpage-feature-img"
                />
                <div className="landingpage-feature-content">
                  <h2>Gemini AI</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, sapiente iste neque repellendus temporibus impedit
                    voluptas quas ipsa dolor quo quos reprehenderit aliquid, ab
                    itaque exercitationem debitis ex necessitatibus! Accusantium
                    necessitatibus dolorem ullam, exercitationem mollitia animi.
                    Esse autem dicta ducimus.
                  </p>
                </div>
              </div>
              <div className="landingpage-feature">
                <img
                  src={geminiLogo}
                  alt=""
                  className="landingpage-feature-img"
                />
                <div className="landingpage-feature-content">
                  <h2>Gemini AI</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, sapiente iste neque repellendus temporibus impedit
                    voluptas quas ipsa dolor quo quos reprehenderit aliquid, ab
                    itaque exercitationem debitis ex necessitatibus! Accusantium
                    necessitatibus dolorem ullam, exercitationem mollitia animi.
                    Esse autem dicta ducimus.
                  </p>
                </div>
              </div>
              <div className="landingpage-feature">
                <img
                  src={geminiLogo}
                  alt=""
                  className="landingpage-feature-img"
                />
                <div className="landingpage-feature-content">
                  <h2>Gemini AI</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, sapiente iste neque repellendus temporibus impedit
                    voluptas quas ipsa dolor quo quos reprehenderit aliquid, ab
                    itaque exercitationem debitis ex necessitatibus! Accusantium
                    necessitatibus dolorem ullam, exercitationem mollitia animi.
                    Esse autem dicta ducimus.
                  </p>
                </div>
              </div>
              <div className="landingpage-feature">
                <img
                  src={geminiLogo}
                  alt=""
                  className="landingpage-feature-img"
                />
                <div className="landingpage-feature-content">
                  <h2>Gemini AI</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, sapiente iste neque repellendus temporibus impedit
                    voluptas quas ipsa dolor quo quos reprehenderit aliquid, ab
                    itaque exercitationem debitis ex necessitatibus! Accusantium
                    necessitatibus dolorem ullam, exercitationem mollitia animi.
                    Esse autem dicta ducimus.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {currentTab === 1 && (
          <>
            <h1 className="landingpage-h1">{t("header.aboutUs")}</h1>
          </>
        )}
        {currentTab === 2 && (
          <>
            <h1 className="landingpage-h1">{t("header.contact")}</h1>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
