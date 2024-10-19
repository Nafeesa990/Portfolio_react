import React from 'react';
import '../css/home.css';
import girl3 from '../images/girl5.jpg';
import Button from 'react-bootstrap/Button';
// import { FiAlignJustify } from "react-icons/fi";
 import Header from '../components/header';
 //import About from '../components/about';

function Home() {
    return (
        <div>
            <Header/>
        <div className='container'>
            <h3 className='box'>Hi,I am Nafeesa Noushad</h3>
            <h3 className='box2'>React Developer</h3>
            <h5 className='box3'>Passionate React Developer crafting elegant and <br></br> efficient web solutions.</h5>
            <Button  className='btn1' variant="outline-light" style={{ borderColor: 'dark' }}>All Projects</Button>
            <Button className='btn2' variant="outline-light" style={{ borderColor: 'dark',left:'10%'}}>About Me</Button>
            <Button className='btn3' variant="outline-light" style={{ borderColor: 'dark' ,left:'21%'}}>Contact Me</Button>

            {/* <h1>Home Page</h1> */}
            <img src={girl3} alt="Girl" />
           
        </div>
        </div>
       
    );
}

export default Home;