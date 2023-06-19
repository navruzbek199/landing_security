import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/Logo.svg";
import { Container } from "react-bootstrap";
import Arrow from "../../assets/images/Vector.svg";
import En_Flag from "../../assets/images/en_flg.svg";
import Burger from "../../assets/images/burger-menu.svg";
import FlagUz from "../../assets/images/uz-flag.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <>
      <div className="navbar">
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
                  About us
                </a>
              </li>
              <li>
                <a href="#benifits">Benefits</a>
              </li>
              <li>
                <a href="#product">Products</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
            </ul>
            <div className="nav_auth">
              <div className="lang">
                <a href="#">
                  <img src={En_Flag} alt="" />
                  <img className="flag-uz" src={FlagUz} alt="flag uzb" />
                  <img className="nav-arrow" src={Arrow} alt="arrow" />
                </a>
              </div>
              <div className="login">
                <a href="https://tizim.astrolab.uz/">Login</a>
              </div>
              <div className="demo">
                <a href="https://tizim.astrolab.uz/">Request a Demo</a>
              </div>
              <button onClick={handleOpenMenu} className="burger-menu">
                <img src={Burger} alt="burger-icon" />
              </button>
            </div>
          </nav>
          <div className="demos">
            <a href="">Request a Demo</a>
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
              About us
            </a>
          </li>
          <li>
            <a href="#benifits">Benefits</a>
          </li>
          <li>
            <a href="#product">Products</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
        </ul>
          <div className="logins">
            <a href="">Login</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
