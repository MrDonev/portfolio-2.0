import '../../Styles/Home/Home.css';
import web from '../../Assets/images/web.png';
import '@animxyz/core';
import { useRef } from 'react';
import { useIsInViewport } from '../../Assets/utils/UtilityFuncs';

const Home = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  if (isInViewport) {
    document.getElementById('nav').childNodes.forEach((node) => {
      if (node.hash === '#app') {
        node.classList.toggle('selectedNav');
      } else {
        node.classList.remove('selectedNav');
      }
    });
  }
  return (
      <div id="home">
        <div>
          <img id="home-img-web" src={web} alt="home" />
        </div>
        <p ref={ref} className='p-field' id="home-p">
          Hello and welcome to my portfolio website! My name is Iliya and I am
          on a journey to becoming a successful full stack developer! Fresh out
          of Northcoders bootcamp, I am looking forward to continue learning new
          technologies and gain experience in the field!
        </p>

      </div>
    
  );
};

export default Home;
