import React from 'react'
import './Benifits.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Vektor3 from '../../assets/images/Vector-1.svg'
import Vektor2 from '../../assets/images/Vector-3.svg'
import Vektor1 from '../../assets/images/Vector-2.svg'
import ArrowLeft from '../../assets/images/arrow-left.svg'
import { useTranslation } from "react-i18next";
const Benifits = () => {
  const { t } = useTranslation();
  return (
    <div className='benifits' id='benifits'>
        <Container fluid="xl">
            <div className="title">
                <span>{t("benefits.benefit")}</span>
            </div>
            <div className="benifits_menu">
                <div className="left_text">
                    <h6>{t("benefits.title_main")}<span>{t("benefits.title_second")}?</span></h6>
                </div>
            </div>
            <Row>
                <Col md="4">
                    <div className="benifit_card">
                        <div className="card_image">
                            <img src={Vektor1} alt="" />    
                        </div>
                        <div className="card_title">
                            <p>{t("benefits.card1_title")}</p>
                        </div>
                        <div className="card_text">
                            <p>{t("benefits.card1_desc")}</p>
                        </div>
                        <div className="card_link">
                            <a href="/">
                            {t("benefits.card_link")}
                                <img src={ArrowLeft} alt="" />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="benifit_card">
                        <div className="card_image2">
                            <img src={Vektor3} alt="" />    
                        </div>
                        <div className="card_title">
                            <p>{t("benefits.card2_title")}</p>
                        </div>
                        <div className="card_text">
                            <p>{t("benefits.card2_desc")} </p>
                        </div>
                        <div className="card_link">
                            <a href="/">
                            {t("benefits.card_link")}
                                <img src={ArrowLeft} alt="" />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="benifit_card">
                        <div className="card_image3">
                            <img src={Vektor2} alt="" />    
                        </div>
                        <div className="card_title">
                            <p>{t("benefits.card3_title")}</p>
                        </div>
                        <div className="card_text">
                            <p>{t("benefits.card3_desc")}</p>
                        </div>
                        <div className="card_link">
                            <a href="/">
                            {t("benefits.card_link")}
                                <img src={ArrowLeft} alt="" />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Benifits