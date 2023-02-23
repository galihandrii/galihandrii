import './About.css'
import Navbar from '../Component/Navbar';
import Footer from "../Component/Footer";


const About = () => {
    return(
        <div className='about'>
            <Navbar/>
            <h1>About Page</h1>
            <Footer/>
        </div>
    )
}

export default About;