import React from 'react'
import './Footer.scss'
import { Container } from 'react-bootstrap'
import Logo from '../../assets/images/Logo.svg'
import ArrowLeft from '../../assets/images/arrow-left.svg'
import Typed from 'react-typed';
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
    return (
        <>
            <div className='footer_top'>
                <Container fluid="xl">
                    <div className="footer_title">
                        
                        <h3>{t("footer.title")}</h3>
                    </div>
                    <div className="footer_blog">
                        <div className="logo">
                            <a href="/">
                                <img src={Logo} alt="" />
                            </a>
                        </div>
                        <div className="message">
                            <button type='submit'>
                                <Typed
                                    strings={[t("footer.btn")]}
                                    typeSpeed={40}
                                    backSpeed={40}
                                    loop
                                    className='typed_text'
                                />
                                <img src={ArrowLeft} alt="arrow-left" />
                            </button>
                            <input type="text" placeholder={t("footer.placeholder")}  />
                            
                        </div>
                        <div className="foter_link">
                            <ul>
                                <li>
                                    <a href="#">+998 90 1234567</a>
                                </li>
                                <li>
                                    <a href="#">49, Islam Karimov street, Tashkent</a>
                                </li>
                                <li>
                                    <a href="#">info@tizim.astrolab.uz</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='footer_bottom'>
                <Container fluid="xl">
                    <div className="foot_bot_tex">
                        <p>All Rights Reserved @Astrolab. 2023</p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer