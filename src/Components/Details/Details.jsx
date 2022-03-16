import React from 'react'
import Data from "../../Assets/Data/data.json";
import './Details.scss'

function Details({categorie}) {
    const newArr = Data.filter(el => el.categorie === categorie);

  return (
    <ul className='details'>
        {newArr.map(el => (
            <li className="details__item" key={Math.random(300)}>
                <img src={el.img} alt="" />
                <div className="details__item-box">
                  <span>Craig Bator - 27 Dec 2020</span>
                  <h2>{el.title}</h2>
                </div>
            </li>
        ))}
    </ul>
  )
}

export default Details