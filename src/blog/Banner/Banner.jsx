import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.scss";
import Bg from "../../assets/images/bg.svg";
import Video from "../../assets/images/video.svg";
import HeroBg from "../../assets/images/bg-hero2.svg"
import Typed from "react-typed";
const Banner = () => {
  return (
    <>
      <Container fluid>
        <div className="banner_main">
          <Container fluid="xl">
            <div className="main">
              <div className="title">
                <h1>
                  <Typed
                    strings={["Automate your human resource management"]}
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
                <p>
                  Astrolab tizim - reduces personnel costs and saves you time.
                </p>
                <div className="btn_banner">
                  <a href="/" className="demo">
                    Request a Demo
                  </a>
                  <a href="/" className="video">
                    <img src={Video} alt="" />
                    <span>How it works</span>
                  </a>
                </div>
              </div>
              <div className="image">
              <picture>
                <source className="banner_main__img" srcset={HeroBg} media="(max-width: 430px)" />
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
