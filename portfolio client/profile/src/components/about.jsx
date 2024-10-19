import React from 'react';
import Header from '../components/header';
import Table from 'react-bootstrap/Table';
import '../css/aboutcss.css';
import { FaReact,FaHtml5,FaNodeJs, FaPython, FaPhp }  from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";



function About() {
    return (
        <div>
            <Header/>
            <h1>About me</h1>
            <p className='line'>---------------------------------------------------------------------------------------------</p>
            <h4 className='who'>Who am I?</h4>
            <p className='lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                
               including versions of Lorem Ipsum.</p>
               
               <h4 className='timeline'>Work Timeline</h4> 
               <Table  className='table'>
      <thead>
       
      </thead>
      <tbody>
        <tr>
          
          <th>Example 1</th>
          <td>Google</td>
          <td>2024</td>
        </tr>
        <tr>
          
          <th>Example 2</th>
          <td>Microsoft</td>
          <td>2022</td>
        </tr>
        <tr>
          
          <th>Example 3</th>
          <td>Meta</td>
          <td>2020</td>
        </tr>
      </tbody>
    </Table>
    <h4 className='skill'>Skills</h4> 
              <p className='div'>
               <p className='l1'> <FaReact className="react-iconr"/>React</p>
               <p className='l1'><BiLogoMongodb className="react-icons"/>Mongodb</p>
               <p className='l1'><FaNodeJs className="react-iconn"/>Nodejs</p>
               <p className='l1'><FaPython className="react-iconp"/>Python</p>
               <p className='l1'><FaPhp className="react-icon"/>Php</p>
               <p className='l1'><FaHtml5 className="react-icon"/>Html</p>
               </p></div>
    );
}

export default About;