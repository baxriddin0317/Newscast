import React from 'react'
import "./Menu.scss";

function Menu({ title, arr }) {
  return (
    <div className='menu'>
        <div className="menu__content">
            <h2>{ title }</h2>
            <div className="menu__block">
   
                { arr && arr.map((obj) => (
                    <span style={{background: `${obj.color}`}} key={obj.id}>
                        {obj.name}
                    </span>
                ))}
            </div>
        </div>
        <span className="menu__line">
            <span></span>
        </span>
    </div>
  )
}

export default Menu