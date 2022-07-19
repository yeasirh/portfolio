import React from 'react';
import { LinkedIn } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Yeasir</h2>
        <div className='prompt'>
          <p>A software developer, with passion for learning new skills and building new things.</p>
          <LinkedIn/>
          <GitHub/>
          <Email/>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>

          <li className='item'>
            <h2>Backend</h2>
            <span>Laravel, Codeigniter, Symfony</span>
          </li>

          <li className='item'>
            <h2>Frontend</h2>
            <span>React, Vue</span>
          </li>

          <li className='item'>
            <h2>Languages</h2>
            <span>PHP, JAVA, Javascript, Python</span>
          </li>

        </ol>
      </div>
    </div>
  )
}

export default Home