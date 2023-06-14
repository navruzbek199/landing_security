import React from 'react'
import './Benifits.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Vektor3 from '../../assets/images/Vector-1.svg'
import Vektor2 from '../../assets/images/Vector-3.svg'
import Vektor1 from '../../assets/images/Vector-2.svg'
import ArrowLeft from '../../assets/images/arrow-left.svg'
const Benifits = () => {
  return (
    <div className='benifits'>
        <Container fluid="xl">
            <div className="title">
                <span>Benefits</span>
            </div>
            <div className="benifits_menu">
                <div className="left_text">
                    <h6>Lorem Ipsum is simply <br /> dummy text</h6>
                </div>
                <div className="right_text">
                    <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s</p>
                </div>
            </div>
            <Row>
                <Col md="4">
                    <div className="benifit_card">
                        <div className="card_image">
                            <img src={Vektor1} alt="" />    
                        </div>
                        <div className="card_title">
                            <p>Controlling attendance</p>
                        </div>
                        <div className="card_text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className="card_link">
                            <a href="/">
                                Learn More
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
                            <p>Community Attachment</p>
                        </div>
                        <div className="card_text">
                            <p>Lorem Ipsum is simply dummy text of the printing. </p>
                        </div>
                        <div className="card_link">
                            <a href="/">
                                Learn More
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
                            <p>Controlling attendance</p>
                        </div>
                        <div className="card_text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                        </div>
                        <div className="card_link">
                            <a href="/">
                                Learn More
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