import React from 'react';

export default function Home() {
  return (
    <div className='container'>
      <h2 className='title'>Resume</h2>
      <h4>Download my <a href="https://docs.google.com/document/d/1tJBebzmlyeDAD8lEyB6FRItsAF9Zeq_2j-l75X42ThM/edit?usp=sharing">resume</a></h4>

      <div>
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div>
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>MySql</li>
          <li>MongoDB</li>
          <li>Node</li>
          <li>Express</li>
          <li>GraphQL</li>
        </ul>
      </div>

    </div>
  );
}