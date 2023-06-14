import React from 'react'
import './Navbar.scss'
import Logo from '../../assets/images/Logo.svg'
import {Container} from 'react-bootstrap'
import Arrow from '../../assets/images/Vector.svg'
import En_Flag from '../../assets/images/en_flg.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <Container fluid="xl">
                <nav>
                    <div className="logo">
                        <a href="/">
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>
                    <ul>
                        <li>
                            <a href="" className='active'>About us</a>
                        </li>
                        <li>
                            <a href="">Benefits</a>
                        </li>
                        <li>
                            <a href="">Products</a>
                        </li>
                        <li>
                            <a href="">Reviews</a>
                        </li>
                    </ul>
                    <div className="nav_auth">
                        <div className="lang">
                            <a href="#">
                                <img src={En_Flag} alt="" />
                                <img src={Arrow} alt="arrow" />
                            </a>
                        </div>
                        <div className="login">
                            <a href="">Login</a>
                        </div>
                        <div className="demo">
                            <a href="">Request a Demo</a>
                        </div>
                    </div>
                </nav>
        </Container>
    </div>
  )
}

export default Navbar