import "../assets/style/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn , faTwitter , faInstagram , faFacebookF , faBehance  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer1">
                <div className="part1">
                    <img src="logo.png" alt="logo" />
                    <ul className="list">
                        <li className="item1">Head Office</li>
                        <li className="item2">Syria - Latakia - grh2+hjx</li>
                        <li className="item3">35.5199518</li>
                    </ul>
                </div>
                <div className="part2">
                    <ul className="list1">
                        <li className="item1">Sales</li>
                        <li className="item2">contact@focal-x.com</li>
                        <li className="item3"><a href="tel:+963 953 666 056">+963 953 666 056</a></li>
                        <ul className="list1-1">
                            <li className="item1">Public Relations</li>
                            <li className="item2"><a href="#">pr@focal-x.com</a></li>
                            <li className="item3"><a href="tel:+963 953 666 052">+963 953 666 052</a></li>
                        </ul>
                    </ul>
                    <ul className="list2">
                        <li className="item1">Customer Support</li>
                        <li className="item2">info@focal-x.com</li>
                        <li className="item3"><a href="tel:+963 953 666 054">+963 953 666 054</a></li>
                        <ul className="list2-1">
                            <li className="item1">Human Resources</li>
                            <li className="item2">hr@focal-x.com</li>
                        </ul>
                    </ul>
                    <ul className="list3">
                        <li className="item1">Clients & Partners</li>
                        <li className="item2">Check Certificat ID</li>
                        <li className="item2">Check for employee</li>
                        <li className="item2">Our Brand ID guidlines</li>
                    </ul>
                    <ul className="list4">
                        <li className="item1">Keep In Touch</li>
                        <div className="social">
                            <li className="item2">
                                <a href="https://www.facebook.com/focal.x.agency/"><FontAwesomeIcon icon={faFacebookF} /></a>
                            </li>
                            <li className="item3">
                                <a href="https://www.behance.net/focal-x-agency"><FontAwesomeIcon icon={faBehance} /></a>
                            </li>
                            <li className="item4">
                                <a href="https://www.linkedin.com/company/focal-x-agency"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </li>
                            <li className="item5">
                                <a href="https://www.instagram.com/focal.x.agency"><FontAwesomeIcon icon={faInstagram} /></a>
                            </li>
                            <li className="item6">
                                <a href="https://twitter.com/focal_x_agency"><FontAwesomeIcon icon={faTwitter} /></a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="footer2">
                <p> <FontAwesomeIcon icon={faCopyright} /> 2021 - 2023 focal X L.L.C All Right Reserved</p>
            </div>
        </footer>
    )
}

export default Footer