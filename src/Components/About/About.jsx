import '../../Styles/About/About.css';
import { useRef } from 'react';
import { useIsInViewport } from '../../Assets/utils/navSelector';

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
    <div ref={ref} id="about">
      <h1>About section</h1>
    </div>
  );
};

export default About;
