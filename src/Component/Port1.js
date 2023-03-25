import './Port1.css'
import rent from "../Assets/customer-rent.png"
import rents from "../Assets/admin-rent.png"


const Port1 = () => {
    return (
        <div className='port-1'>
            <div className='port-1-left'>
            <div className='port-img'><img src={rent}/></div>
            <div className='port-img'><img src={rents}/></div>
            </div>
            <div className='port-1-right'>
                <div className='port-1-customer'><h4>description customer</h4></div>
                <div className='port-1-admin'><h4>description admin</h4></div>
            </div>
            
        </div>
    )
}

export default Port1;