import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Products.scss";
import bg2 from "../../assets/images/dashboard-behance 1.png";
import bg3 from "../../assets/images/Illustration1.svg";
import bg4 from "../../assets/images/Illustration.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import CountUp from "react-countup";
const Products = () => {
  return (
    <div className="products">
      <Container fluid="xl">
        <div className="title">
          <span>Products</span>
        </div>
        <div className="products_menu">
          <div className="left_text">
            <h6>
              <span>Lorem Ipsum</span> is simply dummy text
            </h6>
          </div>
          <div className="right_text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
        <Row>
          <div className="card_wrapper">
            <Col md="4">
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
                      Completed Full 
                      Projects
                    </span>
                    <span className="about">From 789+ Companies</span>
                  </li>
                  <li>
                    <span className="number">
                      <CountUp end={924} duration={5} />+
                    </span>
                    <span className="text">
                      Satisfiingly Happy 
                      Clients
                    </span>
                    <span className="about">From 100+ Countries</span>
                  </li>
                  <li>
                    <span className="number">
                      <CountUp end={416} duration={7} />+
                    </span>
                    <span className="text">
                      Expertised Unit 
                      Employees
                    </span>
                    <span className="about">From 20+ Countries</span>
                  </li>
                  <li>
                    <span className="number">
                      <CountUp end={3024} duration={9} />
                    </span>
                    <span className="text">
                      Startups Case
                      Studies
                    </span>
                    <span className="about">From 100+ Countries</span>
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
                <h4>Integration with Telegram-bot</h4>
              </div>
              <div className="text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </Col>
          <Col md={{ span: 6, offset: 1 }}>
            <div className="card_right_2">
              <div className="card_face">
                <div className="card_img">
                  <img src={bg3} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
       <div className="face_wrapper">
          <img className="face_img" src={bg4} width={644} height={573} alt="bg"/>
          <div className="face-box">
            <h3 className="face_wrapper-title">Face ID</h3>
            <p className="face_wrapper-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <div className="face-btn-box">
            <button className="face-wrapper_btn">
              <p>View More Work</p>
              <img src={ArrowLeft} alt="" />
            </button>
            </div>
          </div>
       </div>
      </Container>
    </div>
  );
};

export default Products;
