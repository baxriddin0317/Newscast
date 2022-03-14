import React from 'react'
import './More.scss';

function More({data}) {
  return (
    <div className='more'>
        <div key={data.id}>
          <img className='more__img' src={data.img} alt='' />
          <span>
          Craig Bator - 27 Dec 2020
          </span>
          <h2 className="more__title">
          {data.title}
          </h2>
          <p className="more__text">
          {data.text}
          </p>
        </div>
    </div>
  )
}

export default More;