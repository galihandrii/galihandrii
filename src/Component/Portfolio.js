import { useState,useEffect } from 'react';
import './Portfolio.css'
import moment from "moment/moment";


const Portfolio = () => {
    
   
    function CurrentDate() {
        const currentDate = new Date();
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = currentDate.toLocaleDateString('en-US', dateOptions);
      
        return (
          <div>
            <p>{dateString}</p>
          </div>
        );
      }

      function Clock() {
        const [time, setTime] = useState(new Date());
      
        useEffect(() => {
          const timerID = setInterval(() => tick(), 1000);
      
          return function cleanup() {
            clearInterval(timerID);
          };
        });
      
        function tick() {
          setTime(new Date());
        }
      
        return (
          <div>
            
            <p>{time.toLocaleTimeString()}</p>
          </div>
        );
      }
      
      
      

    return (
        <div className='port'>
            <div className='port-top'>
                <div className='port-top-date'>
                    <div className='date'><CurrentDate/></div>
                    <div className='time'><Clock/></div>
                </div>
                <div className='port-top-bio'>
                    <p>Hii its Galih Andrihasworo.
                Welcome to my personal website. 
                I do web develop and design. <br/>
                Let's take a look and enjoy
                    </p>
                </div>
            </div>
            <div className='port-bottom'>
                <div className='port-portfolio'>
                    <div><p>Portfolio</p></div>
                    <div><img/></div>
                    <div><h5>These are Galih's portfolio in building a website using a front end tech stack and library like react and bootstrap. Hope you like it :)</h5></div>
                </div>
                <div className='port-photos'></div>
                <div className='port-blog'></div>
            </div>

        </div>
    )
}

export default Portfolio;