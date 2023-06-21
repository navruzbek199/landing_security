import React from 'react'
import './Marketing.scss'
import { Col, Container, Row } from 'react-bootstrap'
import m1 from '../../assets/images/Rectangle 164.svg'
import m2 from '../../assets/images/Rectangle 163.svg'
import m3 from '../../assets/images/Rectangle 162.svg'
import m4 from '../../assets/images/Rectangle 161.svg'
import m5 from '../../assets/images/image 36.svg'
import m6 from '../../assets/images/image 35.svg'
import m7 from '../../assets/images/Group 191.svg'
import m8 from '../../assets/images/Ellipse 91.svg'
const Marketing = () => {
  return (
    <div className='marketing'>
        <Container fluid="xl">
                <Row className='marketing_wrapper'>
                    <Col md="3">
                        <div className="card">
                            <img src={m1} alt="logo" />
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="card">
                            <img src={m2} alt="logo" />
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="card">
                            <img src={m3} alt="logo" />
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="card">
                            <img src={m4} alt="logo" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <div className="card">
                            <img src={m5} alt="logo" />
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="card">
                            <img src={m6} alt="logo" />
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="card">
                            <img src={m7} alt="logo" />
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="card">
                            <img src={m8} alt="logo" />
                        </div>
                    </Col>
                </Row>
        </Container>
    </div>
  )
}

export default Marketing