import './Navbar.css'
import profile from "../Assets/eren.jpg"
import { BsArrowRightCircle ,BsInstagram, BsLinkedin,BsGithub} from "react-icons/bs";


const Navbar = () => {
    return (
        <nav className='header'>
            <div className='header-left'>
                <ul>
                    <li>
                        <a>Home</a>
                        <a className='arrow-icon'><BsArrowRightCircle size={18}/></a>
                    </li>
                    <li>
                        <a>About</a>
                        <a className='arrow-icon'><BsArrowRightCircle size={18}/></a>
                    </li>
                    <li>
                        <a>Contact</a>
                        <a className='arrow-icon'><BsArrowRightCircle size={18}/></a>
                    </li>
                </ul>
            </div>
            
            <div className='header-right'>
                <ul>
                    <li><a href='https://www.instagram.com/galihandrii/'><BsInstagram size={18}/></a></li>
                    <li><a><BsLinkedin  size={18}/></a></li>
                    <li><a href='https://github.com/galihandrii'><BsGithub  size={18}/></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;