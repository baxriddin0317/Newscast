import React from 'react'
import './BigPicture.scss';

function BigPicture({obj}) {
    const {img, title, text} = obj;
  return (
    <>
        {obj && <div className='big'>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <hr />
            <p>{text}</p>    
        </div>}
    </>
  )
}

export default BigPicture