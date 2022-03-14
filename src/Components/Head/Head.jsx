import React from 'react'
// import { Link } from 'react-router-dom';
import './Head.scss';

function Head() {
  const months = ['Janiur', 'February', 'March', 'April', 'May', 'June', 'August', 'September',
                  'Octiber', 'Novomber', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturday'];
  let date_date = new Date();
  // get day
  let current_day = date_date.getDay();
  // get month
  let current_month = date_date.getMonth();
  // get fullyear
  let current_year = date_date.getFullYear();
  // get date
  let current_date = date_date.getDate();

  return (
    <div className='head'>
        <div className="container">
            <div className="head__block">
                <div className="head__left">
                  <i className='bx bxs-sun'></i>
                  <span className='gradius'>15 <small>0</small> <i>C</i></span>
                  <span>ANDIJON</span>
                  <i className='bx bx-time-five'></i>
                  <span>{days[current_day]} {current_date} {months[current_month]} {current_year}</span>
                  <span className="news">Breaking news</span>
                  <span>Uzbekistan says located black box recorders from crashed plane</span>
                </div>

                <div className="head__right">
                  <a href='https://www.facebook.com/'><i className='bx bxl-facebook-circle facebook'></i></a>
                  <a href='https://www.twitter.com/'><i className='bx bxl-twitter twitter' ></i></a>
                  <a href='https://www.instagram.com/'><i className='bx bxl-instagram-alt instagram' ></i></a>
                  <a href='https://www.youteube.com/' ><i className='bx bxl-youtube youtube' ></i></a>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Head