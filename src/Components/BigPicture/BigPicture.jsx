import React from 'react'
import './BigPicture.scss';

function BigPicture({obj, hr, styles}) {
    const {img, title, text} = obj;
    
  return (
    <>
        {obj && <div className='big'>
            <img src={img} alt="" />
            <h2 className={styles ? "big__title" : ""}>{title}</h2>
            {hr ? <hr /> : <a className='big__play' href='https://www.youtube.com/?hl=RU' ><i className='bx bx-play'></i></a>}
            <p className={styles ? "big__text" : ""}>{text}</p>    
        </div>}
    </>
  )
}

export default BigPicture