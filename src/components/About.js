import React from 'react';
import port from '../port-pic.jpg'

const picture = {
  borderRadius: '50%',
  padding: '15px'
}
export default function About() {
  return (
    <div className="container ">
      <h2>About me</h2>

      <img style={picture} src={port} alt="picture of Wesley Rogers" />

      <p>I'm Wesley Rogers and I live in Charlotte, NC. I am currently taking a Web Developer
        bootcamp with UNCC. I started learning code about 2 years ago in my free time and decided this was a
        career I wanted to purse. I initially started learning from free resources online but wanted to fast
        track my learning and enrolled into the bootcamp. When I'm not learning code or creating apps I
        spend time with my family. I've been married for about 4 years and had my first child during the
        pandemic in 2020. I really enjoy coding because it always changes and there is always something to learn.</p>
    </div>
  );
}