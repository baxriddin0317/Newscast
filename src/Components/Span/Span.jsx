import React from 'react'
import Data from "../../Assets/Data/data.json";

function Span({categorie}) {

    const newArr = Data.filter(el => el.categorie === categorie);

  return (
    <span className='categories__item-span'>
        {newArr.length}
    </span>
  )
}

export default Span