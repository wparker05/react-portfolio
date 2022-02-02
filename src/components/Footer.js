import React from 'react';
import github from '../github.png';
import linkedin from '../linkedin.png';
import overstack from '../overstack.png';
const footer ={
  backgroundColor: '#69A297',
  paddingTop: '15px'

}
export default function Footer() {
    return (
        <div style={footer} className="d-flex justify-content-evenly">
         <a href="https://github.com/wparker05"><img src={github} alt="github logo" /></a>
         <a href="https://www.linkedin.com/in/wesley-rogers"><img src={linkedin} alt="linkedin logo"/></a>
         <a href="https://stackexchange.com/users/23258912/wesley"><img src={overstack} alt="overstack logo"/></a>
        </div>
      );
}