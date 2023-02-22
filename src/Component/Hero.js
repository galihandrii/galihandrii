import './Hero.css'
import profile from "../Assets/eren.jpg"
import { BsLaptopFill} from "react-icons/bs";


const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
            <div><h1>Galih Andrihasworo</h1></div>
            <div className='hero-left-bio'><h5>Web Developer</h5></div>
            </div>
            <div className='hero-right'>
                <div className='hero-right-img'><img src={profile}/></div>
                <div className='hero-right-say'><p>Say something to Galih</p></div>
            </div>
        </div>
    )
}

export default Hero;