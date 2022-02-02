import React from 'react';
import Project from './Project';
import password from '../password.png';
import cuisine from '../cuisine.png';
import code from '../code.png';
import notetaker from '../notetaker.png';
import weather from '../weather.png';
import scheduler from '../scheduler.png';

const box = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '100px',
  marginBottom: '100px',
  margin: 'auto'
}

export default function Portfolio() {
  return (
    <div style={box} className="container" >
      <div><Project name="International Cuisine" image={cuisine} desc="seo refactor project" site="https://mchapm17.github.io/international-cuisine/index.html" repo="https://github.com/mchapm17/international-cuisine"/></div>
      <div><Project name="Work Day Scheduler" image={scheduler} desc="work dy scheduler" site="https://wparker05.github.io/work-day-scheduler/" repo="https://github.com/wparker05/work-day-scheduler"/></div>
      <div><Project name="Password Generator" image={password} desc="password generator" site="https://wparker05.github.io/password-generator/" repo="https://github.com/wparker05/password-generator"/></div>
      <div><Project name="Weather Dashboard" image={weather} desc="weather dashborad" site="https://wparker05.github.io/weather-dashboard/" repo="https://github.com/wparker05/weather-dashboard"/></div>
      <div><Project name="Note Taker" image={notetaker} desc="note taker" site="https://mysterious-dawn-90083.herokuapp.com/" repo="https://github.com/wparker05/note-taker"/></div>
      <div><Project name="Code Quiz" image={code} desc="code quiz" site="https://wparker05.github.io/code-quiz/" repo="https://github.com/wparker05/code-quiz"/></div>
    </div>
  );
}