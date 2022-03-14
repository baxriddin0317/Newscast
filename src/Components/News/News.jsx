import React, { useState } from 'react'
import List from '../List/List'
import Data from '../../Assets/Data/data.json';
import "./News.scss";

function News() {

    const [data, setData] = useState(Data.filter(obj => obj.categorie === "Recent"));

    const handleActive = (evt) => {
        const removeClass = document.querySelector(".active_span");
        removeClass.classList.remove('active_span');

        evt.currentTarget.classList.add('active_span');

        setData(Data.filter(obj => obj.categorie === evt.currentTarget.innerText));
    }
  return (
    <div className='news'>
        <div className="news__head">
            <span className='active_span' onClick={handleActive}>Recent</span>
            <span onClick={handleActive}>Trending</span>
            <span onClick={handleActive}>Most Views</span>
        </div>
        <span className='news__line'>
        </span>
        <List data={data} />
    </div>
  )
}

export default News