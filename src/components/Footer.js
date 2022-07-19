import React from 'react';
import { Instagram } from '@material-ui/icons/';
import { Twitter } from '@material-ui/icons/';
import { Facebook } from '@material-ui/icons/';
import { LinkedIn } from '@material-ui/icons/';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/>
            <Twitter/>
            <Facebook/>
            <LinkedIn/>
            <p>&copy; 2022 yeasirh.me</p>
        </div>
    </div>
  )
}

export default Footer