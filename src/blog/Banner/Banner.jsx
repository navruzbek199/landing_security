import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.scss";
import Bg from "../../assets/images/bg.svg";
import Video from "../../assets/images/video.svg";
import HeroBg from "../../assets/images/bg-hero2.svg";
import Typed from "react-typed";
import { useTranslation } from "react-i18next";
const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container fluid>
        <div className="banner_main">
          <Container fluid="xl">
            <div className="main">
              <div className="title">
                <h1>
                  <Typed
                    strings={[t("hero.title")]}
                    typeSpeed={40}
                    backSpeed={40}
                    // showCursor={true}
                    smartBackspace={false}
                    shuffle={false}

                    // attr="placeholder"
                    // loop
                  />
                </h1>
                {/* <h1>Automate your <br />
                                    human resource <br />
                                    management</h1> */}
                <p>{t("hero.desc")}</p>
                <div className="btn_banner">
                  <a href="/" className="demo">
                    {t("hero.demo")}
                  </a>
                  <a href="/" className="video">
                    <img src={Video} alt="" />
                    <span> {t("hero.works")}</span>
                  </a>
                </div>
              </div>
              <div className="image">
                <picture>
                  <source
                    className="banner_main__img"
                    srcset={HeroBg}
                    media="(max-width: 430px)"
                  />
                  <img className="banner_main__img" src={Bg} alt="" />
                </picture>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Banner;
