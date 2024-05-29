import "../assets/style/Hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn , faTwitter , faInstagram , faFacebookF , faBehance  } from '@fortawesome/free-brands-svg-icons'
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-part1">
                <h1>Hey !! Mario still here, But don’t forget that</h1>
                <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
                    Branding, Digital Marketing, Web/App Development, Ui/Ux
                    Content creation, Graphic design, Social media and More........
                    So you can take a tour in our website, OR just <span>Press Start :)</span>
                </p>
                <img className="hero-pattern" src="pattren.png" alt="" />
            </div>
            <div className="hero-part2">
                <div className="social">
                    <div className="social1">
                        <a href="https://www.facebook.com/focal.x.agency/"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </div>
                    <div className="social2">
                        <a href="https://www.behance.net/focal-x-agency"><FontAwesomeIcon icon={faBehance} /></a>
                    </div>
                    <div className="social3">
                        <a href="https://www.linkedin.com/company/focal-x-agency"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <div className="social4">
                        <a href="https://www.instagram.com/focal.x.agency"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                    <div className="social5">
                        <a href="https://twitter.com/focal_x_agency"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </div>
                <div className="copyright">
                    <p><FontAwesomeIcon icon={faCopyright} className="copy" /> 2021 - 2022 focal X agency All Right Reserved</p>
                </div>
                <img className="hero-game" src="gameBoy-min.png" alt="" />
                <img className="hero-start" src="pressStart.svg" alt="" />
                <a className="start" href="#">START</a>
            </div>
        </section>
    )
}

export default Hero