import './Portfoliopage.css'
import Navbar from "../Component/Navbar";
import Footer from '../Component/Footer';
import rent from "../Assets/customer-rent.png"
import space from "../Assets/space-tour.png"

const Portfoliopage = () => {
    return (
        <div className='about'>
            <Navbar/>
            <div>
            <h1>Portfolio Page</h1>
            <h4>These are Galih's showcase works on frontend development</h4>
            </div>
            <div className='port-cards-section'>
                <div className='port-cards'>
                    <div>
                    <h3>Binar Car Rental</h3>
                    <p>A Car Rental to make your journey more easier and comfortable</p>
                    </div>
                    <div className='port-img'><img src={rent}/></div>
                    <div><p className='see-more-h4'>See More →</p></div>
                </div>
                <div className='port-cards'>
                    <div>
                    <h3>Space Tourism</h3>
                    <p>Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className='port-img'><img src={space}/></div>
                    <div><p className='see-more-h4'>See More →</p></div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Portfoliopage;