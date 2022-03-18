import './App.scss';
import Head from './Components/Head/Head';
import Header from './Components/Header/Header';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import List from './Components/List/List';
import Menu from './Components/Menu/Menu';
import More from './Components/More/More'

// Data
import Data from "./Assets/Data/data.json";
import { useState } from 'react';
import News from './Components/News/News';
import Entertainment from './Components/Entertainment/Entertainment';
import Conected from './Components/Conected/Conected';
import Life from './Components/Life/Life';
import Footer from './Components/Footer/Footer';


const arr = [
  {
    id: 1,
    name: "All",
    color: "#FE4A51"
  },
  {
    id: 2,
    name: "Lifestyle",
    color: "#A56CBD"
  },
  {
    id: 3,
    name: "Vogue",
    color: "#2ECC71"
  },
  {
    id: 4,
    name: "Health & Fitness",
    color: "#0088FF"
  },
  {
    id: 5,
    name: "Travel",
    color: "#997C00"
  },
  {
    id: 6,
    name: "Gadgets",
    color: "#49CFE8"
  },
  {
    id: 7,
    name: "World",
    color: "#0088FF"
  },
  {
    id: 8,
    name: "More",
    color: "#4C60F5"
  }
]

function App() {

  const [number, setNumber] = useState(0); 
  const [i, seti] = useState(0); 
  const [sports, setSports] = useState(Data.filter(obj => obj.categorie === "Sports"));

  return (
    <div className="app">
      <Head />
      <Header />
      <Jumbotron />
      <section className='container section'>
        <div className="section__left">
          <Menu title={"Don't Miss"} arr = {arr} />
          <div className='section__left-box'>
            <More data={Data[number]} />
            <List data={Data} setNumber={setNumber} />
          </div>
        </div>
        <div className="section__right">
          <News />
        </div>
      </section>

      <section className='container'>
        <Menu title={"Entertainment"} />
        <Entertainment />
      </section>

      <section className='container section'>
        <div className="section__left">
          <Menu title={"Sports"} arr = {arr} />
          <div className='section__left-box'>
            <More data={sports[i]} />
            <List data={sports} seti = {seti} setSports={setSports} />
          </div>
          <Menu title={'Video'} arr = {arr} />
          <Life />
        </div>
        <div className="section__right">
          <Conected />
        </div>
      </section> 

      <Footer />     
    </div>
  );
}

export default App;
