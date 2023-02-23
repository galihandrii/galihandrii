import { useState,useEffect } from 'react';
import './Portfolio.css'
import moment from "moment/moment";
import web from "../Assets/web-design.png"
import {IoMdPhotos} from "react-icons/io";
import {FaBloggerB} from "react-icons/fa";


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
                Let's take a look and enjoy / ©2023
                    </p>
                </div>
            </div>
            <div className='port-bottom'>
                <div className='port-portfolio'>
                    <div><h3>Portfolio</h3></div>
                    <div className='port-portfolio-img'><img src={web}/></div>
                    <div>
                      <p>These are Galih's portfolio in building a website
                       using a front end tech stack and library like react and bootstrap.
                      </p>
                    </div>
                </div>
                <div className='port-photos'>
                  <div><h3>Photos</h3></div>
                  <div className='port-photos-info'>
                    <div><p>A few favorites moment captured</p></div>
                    <div><IoMdPhotos size={80}/></div>
                  </div>
                </div>
                <div className='port-blog'>
                  <div><h3>Blog</h3></div>
                  <div className='port-blog-info'>
                    <div><h4>asasasasasas asasasa asasasas</h4></div>
                    <div><FaBloggerB size={80}/></div>
                  </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;