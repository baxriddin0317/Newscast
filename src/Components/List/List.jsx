import React from 'react'
import './List.scss';

function List({data, setNumber, seti}) {
  return (
    <>
      {data.length>0 && <ul className='list'>
        {data.map((obj, index) => (
              <li className="list__item" key={index} 
                onClick={() => {
                  if(setNumber){
                    setNumber(index);
                  }else if(seti){
                    seti(index);
                  }
                }}
              >
                <img src={obj.img} alt="" />
                <div className="list__item-box">
                  <span>Craig Bator - 27 Dec 2020</span>
                  <h2>{obj.title}</h2>
                </div>
              </li>
        ))}
    </ul>}
    </>
  )
}

export default List