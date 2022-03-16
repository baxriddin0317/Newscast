import React from 'react'
import "./Conected.scss"
import Ovqat from "../../Assets/Img/ovqat.jpg";
import Form from '../Form/Form';
import Categories from '../Categories/Categories';

function Conected() {
  return (
    <div className='conected'>
        <h3 className="conected__title">
            Stay Conected
        </h3>
        <span className='conected__line'></span>
        <div className="conected__links">
            <a href={"https://www.facebook.com"}>
                <i className='bx bxl-facebook'></i>
                <div>
                    <span>15000</span>
                    <span>Followers</span>
                </div>    
            </a>
            <a href={"https://www.facebook.com"}>
                <i className='bx bxl-instagram'></i>
                <div>
                    <span>15000</span>
                    <span>Followers</span>
                </div>    
            </a>
            <a href={"https://www.facebook.com"}>
                <i className='bx bxl-twitter'></i>
                <div>
                    <span>15000</span>
                    <span>Followers</span>
                </div>    
            </a>
            <a href={"https://www.facebook.com"}>
                <i className='bx bxl-youtube'></i>
                <div>
                    <span>15000</span>
                    <span>Followers</span>
                </div>    
            </a>
            <a href={"https://www.facebook.com"}>
                <i className='bx bxl-behance'></i>
                <div>
                    <span>15000</span>
                    <span>Followers</span>
                </div>    
            </a>
            <a href={"https://www.facebook.com"}>
                <i className='bx bxl-dribbble'></i>
                <div>
                    <span>15000</span>
                    <span>Followers</span>
                </div>    
            </a>
        </div>

        <div className="conected__ad">
            <img src={Ovqat} alt="ovqat" />
            <span>
                Ad
            </span>
        </div>

        <div className="conected__box">
            <h2>Get Latest Updates</h2>
            <Form />
        </div>

        <h3 className="conected__title">
            Categories
        </h3>
        <span className="conected__line"></span>

        <div className="conected__list">
            <Categories />
        </div>
    
    </div>
  )
}

export default Conected