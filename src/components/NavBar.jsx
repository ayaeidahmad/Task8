import "../assets/style/NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const NavBar = () => {
    const [toggle , setToggle] = useState(false);
    const openToggle = () => {
        setToggle(!toggle) 
    }
    return (
        <nav className={toggle?'navbar expanded':'navbar'}>
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>Digital marketing agency</span>
            </div>
            <ul className="links">
                <li><a href="#" className= "active1">Home</a></li>
                <li><a href="#" className="active1">Services</a></li>
                <li><a href="#" className="active1">Portfolio</a></li>
                <li><a href="#" className="active2">Clients & Partners</a></li>
                <li> <a href="#" className="active3">X Academy</a></li>
                <li><a href="#" className="active3">About Us</a></li>
                <li><a href="#" className="active3">Let’s Talk </a></li>
            </ul>
            <div className="menu" onClick={openToggle}>
                {toggle?<FontAwesomeIcon icon={faClose} />:<FontAwesomeIcon icon={faBars} />}
            </div>
        </nav>
    )
}

export default NavBar
