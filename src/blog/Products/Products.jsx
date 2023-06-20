import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Products.scss";
import bg2 from "../../assets/images/dashboard-behance 1.png";
import bg3 from "../../assets/images/Illustrationa.svg";
import bg4 from "../../assets/images/Illustratione.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import CountUp from "react-countup";
import B1 from "../../assets/images/Group.svg";
import B2 from "../../assets/images/Group-39.svg";
import B3 from "../../assets/images/Group-28.svg";
import BMen from "../../assets/images/Men3.6.svg";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Products = () => {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.to("#b1", {
      left: "40px",
      bottom: "50px",
      duration: 2,
      opacity: "1",
      delay: 1,
      scrollTrigger: {
        trigger: "#b1",
      },
    });
    gsap.to("#b2", {
      right: "80px",
      top: "100px",
      opacity: "1",
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: "#b2",
      },
    });
    gsap.to("#b3", {
      left: "20px",
      top: "100px",
      duration: 2,
      opacity: "1",
      delay: 1,
      scrollTrigger: {
        trigger: "#b3",
      },
    });
  }, []);

  return (
    <div className="products" id="product">
      <Container fluid="xl">
        <div className="title">
          <span>{t("products.title")}</span>
        </div>
        <div className="products_menu">
          <div className="left_text">
            <h6>
              <span>{t("products.text1_main")}</span>{" "}
              {t("products.text1_second")}
            </h6>
          </div>
          <div className="right_text">
            <p>{t("products.text2")}</p>
          </div>
        </div>
        <Row>
          <div className="card_wrapper">
            <Col>
              <div className="card_left">
                <div className="card_img">
                  <img src={bg2} alt="" />
                </div>
              </div>
            </Col>
            <Col md={{ span: 7, offset: 1 }}>
              <div className="card_right">
                <ul>
                  <li>
                    <span className="number">
                      <CountUp end={9} duration={5} />
                      k+
                    </span>
                    <span className="text">
                      {t("products.dsh_item1_title")}
                    </span>
                    <span className="about">
                      {" "}
                      {t("products.dsh_item1_desc")}
                    </span>
                  </li>
                  <li>
                    <span className="number">
                      <CountUp end={924} duration={5} />+
                    </span>
                    <span className="text">
                      {" "}
                      {t("products.dsh_item2_title")}
                    </span>
                    <span className="about">
                      {" "}
                      {t("products.dsh_item2_desc")}
                    </span>
                  </li>
                  <li>
                    <span className="number">
                      <CountUp end={416} duration={7} />+
                    </span>
                    <span className="text">
                      {" "}
                      {t("products.dsh_item3_title")}
                    </span>
                    <span className="about">
                      {" "}
                      {t("products.dsh_item3_desc")}
                    </span>
                  </li>
                  <li>
                    <span className="number">
                      <CountUp end={3024} duration={9} />
                    </span>
                    <span className="text">
                      {" "}
                      {t("products.dsh_item4_title")}
                    </span>
                    <span className="about">
                      {" "}
                      {t("products.dsh_item4_desc")}
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
          </div>
        </Row>
        <Row>
          <Col md="5" className="card_bot">
            <div className="card_left_2">
              <div className="title">
                <h4> {t("products.tg_bot_title")}</h4>
              </div>
              <div className="text">
                <p>
                {t("products.tg_bot_desc")}
                </p>
              </div>
            </div>
          </Col>
          <Col md={{ span: 6, offset: 1 }}>
            <div className="card_right_2">
              <div className="card_face">
                <div className="card_img">
                  <img src={BMen} alt="" />
                  <img src={bg3} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="5">
            <div className="card_right_3">
              <div className="card_face">
                <div className="card_img">
                  <img src={bg4} alt="" />
                </div>
              </div>
              <div className="card_animation">
                <img src={B1} alt="" id="b1" />
                <img src={B2} alt="" id="b2" />
                <img src={B3} alt="" id="b3" />
              </div>
            </div>
          </Col>
          <Col md={{ span: 5, offset: 2 }} className="card_bot">
            <div className="card_left_2">
              <div className="title">
                <h4>Face ID</h4>
              </div>
              <div className="text">
                <p>
                {t("products.face_id_desc")}
                </p>
              </div>
              <div className="link">
                <a href="/">
                {t("products.product_link")}
                  <img src={ArrowLeft} alt="" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
