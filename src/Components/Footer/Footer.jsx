import React from 'react'
import './Footer.scss';
import Img from "../../Assets/Img/footer.png";
import Data from "../../Assets/Data/data.json";
import Form from '../Form/Form';

function Footer({arr}) {
  const objs = Data.slice(10, 16);

  return (
    <div className='footer'>
        <div className="container footer__block">
          <div className="footer__box">
            <a className='footer__box-logo' href="/">
              <img src={Img} alt="" />
            </a>
            <p className="footer__box-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, pellentesque dictum posuere id diam rutrum. 
            </p>
            <div className='footer__box-links'>
              <a href="http://instagram.com">
                <i className='bx bxl-instagram-alt'></i>
              </a>
              <a href="http://facebook.com">
                <i class='bx bxl-facebook'></i>
              </a>
              <a href="http://twitter.com">
                <i class='bx bxl-twitter' ></i>
              </a>
              <a href="http://youtube.com">
                <i class='bx bxl-youtube' ></i>
              </a>
            </div>
          </div>
          <div className="footer__box">
            <h2>Photo gallery</h2>
            <span className="footer__box-line">
                <span></span>
            </span>
            <div className="footer__box-pictures">
              {objs.map(obj => (
                <img src={obj.img} alt={obj.title} />
              ))}
            </div>
          </div>

          <div className="footer__box">
            <h2>Tags</h2>
            <span className="footer__box-line">
                <span></span>
            </span>

            <div className="footer__content">
   
                { arr && arr.map((obj) => (
                    <span style={{background: `${obj.color}`}} key={obj.id}>
                        {obj.name}
                    </span>
                ))}
            </div>
          </div>
          <div className="footer__box">
              <h2>Tags</h2>
              <span className="footer__box-line">
                  <span></span>
              </span>
              <p className='footer__box-matn'>
                To be updated with all the latest news, offers
                and special annoucements.
              </p>
              <Form />
          </div>
        </div>
    </div>
  )
}

export default Footer