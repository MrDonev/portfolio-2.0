import '../../Styles/About/About.css';
import { useRef } from 'react';
import { useIsInViewport } from '../../Assets/utils/UtilityFuncs';
import dev4 from '../../Assets/images/dev4.png';
import axios from '../../Assets/images/tech/axios.svg';
import css from '../../Assets/images/tech/css.svg';
import express from '../../Assets/images/tech/express.svg';
import github from '../../Assets/images/tech/github.svg';
import html from '../../Assets/images/tech/html.svg';
import javascript from '../../Assets/images/tech/javascript.svg';
import jest from '../../Assets/images/tech/jest.svg';
import nodejs from '../../Assets/images/tech/nodejs.svg';
import psql from '../../Assets/images/tech/psql.svg';
import react from '../../Assets/images/tech/react.svg';
const About = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  if (isInViewport) {
    document.getElementById('nav').childNodes.forEach((node) => {
      if (node.hash === '#about') {
        node.classList.toggle('selectedNav');
      } else {
        node.classList.remove('selectedNav');
      }
    });
  }

  return (
    <div id="about">
      <div id="about-container">
        <div className="p-field" id="about-text">
          <h4>About me in a few words:</h4>
          <p ref={ref}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe
            eius aliquid eligendi ea adipisci quaerat culpa iure, veniam ipsam
            libero assumenda, non eaque atque vel ab sequi quidem officia. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. In cumque quae
            obcaecati expedita veniam quasi doloremque assumenda delectus
            asperiores architecto esse suscipit neque, maxime totam laudantium
            nobis quas placeat libero.
          </p>
        </div>
        <div id='about-images'>
          <img id="dev4" src={dev4} alt="dev4" />
          <div id="tech-container">
            <img title="Axios" className="svg" src={axios} alt="axios" />
            <img title="HTML" className="svg" src={html} alt="html" />
            <img title="CSS" className="svg" src={css} alt="css" />
            <img
              title="JavaScript"
              className="svg"
              src={javascript}
              alt="javascript"
            />
            <img title="GitHub" className="svg" src={github} alt="github" />
            <img
              title="ExpressJs"
              className="svg"
              src={express}
              alt="express"
            />
            <img title="JestJs" className="svg" src={jest} alt="jest" />
            <img title="Node.js" className="svg" src={nodejs} alt="nodejs" />
            <img title="PosgreSQL" className="svg" src={psql} alt="psql" />
            <img title="ReactJs" className="svg" src={react} alt="react" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
