import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/Logo.svg";
import { Container } from "react-bootstrap";
import Arrow from "../../assets/images/Vector.svg";
import Ru_Flag from "../../assets/images/ru_flag.svg";
import Burger from "../../assets/images/burger-menu.svg";
import FlagUz from "../../assets/images/uz-flag.svg";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const header = useRef("");
  const ru = useRef("");
  const uz = useRef("");
  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = () => {
    if (isOpen) {
      handleCloseMenu();
    }
  };

  const handleRu = () => {
    localStorage.setItem("language", "ru");
    localStorage.setItem("language_icon", ru.current.src);
    window.location.reload(false);
  };

  const handleUz = () => {
    localStorage.setItem("language", "uz");
    localStorage.setItem("language_icon", uz.current.src);
    window.location.reload(false);
  };

  window.onscroll = function () {
    var heightOfWindow = window.pageYOffset;
    if (heightOfWindow > 700) {
      header.current.style.position = "fixed";
      header.current.style.top = "0";
      header.current.style.width = "100%";
      header.current.style.backgroundColor = "white";
      header.current.style.opacity = "1";
      header.current.style.zIndex = "999";
    } else if (heightOfWindow > 135) {
      header.current.style.opacity = "0";
      header.current.style.top = "-50px";
    } else {
      header.current.style.opacity = "1";
    }
  };

  return (
    <>
      <div className="navbar" ref={header}>
        <Container fluid="xl">
          <nav>
            <div className="logo">
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <ul>
              <li>
                <a href="" className="active">
                  {t("header.about")}
                </a>
              </li>
              <li>
                <a href="#benifits">{t("header.benefit")}</a>
              </li>
              <li>
                <a href="#product">{t("header.products")}</a>
              </li>
              <li>
                <a href="#reviews">{t("header.reviews")}</a>
              </li>
            </ul>
            <div className="nav_auth">
              <div className="lang dropdown">
                <a href="#" className="dropbtn">
                  <img
                    src={
                      localStorage.getItem("language_icon")
                        ? localStorage.getItem("language_icon")
                        : Ru_Flag
                    }
                    alt=""
                    className="lang_drop_btn"
                  />
                  <img
                    className="flag-uz"
                    src={Ru_Flag}
                    onClick={handleRu}
                    alt="flag uzb"
                  />
                  <img
                    className="flag-uz"
                    src={FlagUz}
                    onClick={handleUz}
                    alt="flag uzb"
                  />
                  <img className="nav-arrow" src={Arrow} alt="arrow" />
                </a>
                <div class="dropdown-content">
                  <a href="#" onClick={handleRu}>
                    {" "}
                    <img src={Ru_Flag} alt="flag uzb" ref={ru} />
                  </a>
                  <a href="#" onClick={handleUz}>
                    {" "}
                    <img src={FlagUz} alt="flag uzb" ref={uz} />
                  </a>
                </div>
              </div>
              <div className="login">
                <a href="https://tizim.astrolab.uz/">{t("header.login")}</a>
              </div>
              <div className="demo">
                <a href="https://tizim.astrolab.uz/">{t("header.demo")}</a>
              </div>
              <button onClick={handleOpenMenu} className="burger-menu">
                <img src={Burger} alt="burger-icon" />
              </button>
            </div>
          </nav>
          <div className="demos">
            <a href="https://tizim.astrolab.uz/">{t("header.demo")}</a>
          </div>
        </Container>
      </div>

      <div
        onClick={handleOverlayClick}
        className={`menu ${isOpen ? "ActiveBurgerMenu" : ""}`}
      >
        <div className="close-box">
          <button className="close-btn" onClick={handleCloseMenu}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L18 18"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 1L1 18"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <ul>
          <li>
            <a href="/" className="active">
              {t("header.about")}
            </a>
          </li>
          <li>
            <a href="#benifits"> {t("header.benefit")}</a>
          </li>
          <li>
            <a href="#product"> {t("header.products")}</a>
          </li>
          <li>
            <a href=""> {t("header.reviews")}</a>
          </li>
        </ul>
        <div className="logins">
          <a href=""> {t("header.login")}</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
