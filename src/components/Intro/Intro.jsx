import React from 'react';
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
                <span>Hi! I Am</span>
                <span>Sheryl Chepngetich</span>
                <span>Web Developer with experience in react,php,html and css.Always developing to achieve quality.</span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
        </div>
        </div>
        <div className="i-right">
            This is where to display my image
        </div>
    </div>  
  );
}

export default Intro;
 