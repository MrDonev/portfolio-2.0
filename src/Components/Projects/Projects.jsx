import '../../Styles/Projects/Projects.css';
import { useEffect, useRef } from 'react';
import { useIsInViewport } from '../../Assets/utils/UtilityFuncs';
import weatherApp from '../../Assets/projects-snapshots/weather-app.png';
import calcApp from '../../Assets/projects-snapshots/calc-app.png';
import marketplaceApp from '../../Assets/projects-snapshots/marketplace-app.png';
import ncGames from '../../Assets/projects-snapshots/nc-games.png';
import backEndApi from '../../Assets/projects-snapshots/backend-api.png';
import spaceGuardians from '../../Assets/projects-snapshots/spaceGuardians.png';
const Projects = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  if (isInViewport) {
    document.getElementById('nav').childNodes.forEach((node) => {
      if (node.hash === '#projects') {
        node.classList.toggle('selectedNav');
      } else {
        node.classList.remove('selectedNav');
      }
    });
  }
  let slideIndex = 1;
  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }

  return (
    <div id="projects">
      <div id="projects-section">
        <h1 ref={ref}>
          Here you can find some of the projects I built during the coding
          bootcamp:
        </h1>
        <div className="slideshow-container">
          <div id="dot-container">
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
            <span className="dot" onClick={() => currentSlide(4)}></span>
            <span className="dot" onClick={() => currentSlide(5)}></span>
            <span className="dot" onClick={() => currentSlide(6)}></span>
          </div>
          <div className="mySlides fade">
            <a
              title="Open project's website"
              target="_blank"
              rel="noreferrer"
              href="https://spaceguardians-d5924.web.app/"
            >
              <img src={spaceGuardians} alt="weather app pic" />
            </a>
            <div className="caption">
              <h2>SpaceGuardians final project</h2>
              <h3>
                Final project for Northcoders bootcamp. Tech stack used :
                Firebase, ReactJs, Phaser 3, CSS, HTML.
              </h3>
            </div>{' '}
          </div>
          <div className="mySlides fade">
            <a
              title="Open project's website"
              target="_blank"
              rel="noreferrer"
              href="https://myreact-weatherapp.netlify.app/"
            >
              <img src={weatherApp} alt="weather app pic" />
            </a>
            <div className="caption">
              <h2>Weather app</h2>
              <h3>
                My second ever Reactjs app. We had a solo project for day and a
                half and I managed to come up with this. I wanted to show hourly
                temperatures in the 5 day forecasts but unfortuantely the time
                was not enough.
              </h3>
            </div>
          </div>
          <div className="mySlides fade">
            <a
              title="Open project's website"
              target="_blank"
              rel="noreferrer"
              href="https://fe-react-calculator.netlify.app/"
            >
              <img src={calcApp} alt="weather app pic" />
            </a>
            <div className='caption'>
            <h2>Calc app</h2>
            </div>
          </div>
          <div className="mySlides fade">
            <a
              title="Open project's website"
              target="_blank"
              rel="noreferrer"
              href="https://react-ncmarketplace.netlify.app/"
            >
              <img src={marketplaceApp} alt="weather app pic" />
            </a>
            <div className='caption'>
            <h2>Marketplace app</h2>
         </div> </div>{' '}
          <div className="mySlides fade">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://donev-nc-games.netlify.app/"
            >
              <img src={ncGames} alt="weather app pic" />
            </a>
            <div className='caption'>
            <h2>NC Games app</h2>
            </div>
          </div>{' '}
          <div className="mySlides fade">
            <a
              title="Open project's website"
              target="_blank"
              rel="noreferrer"
              href="https://donev-nc-games.herokuapp.com/api"
            >
              <img src={backEndApi} alt="weather app pic" />
            </a>
            <div className='caption'>
            <h2>Back end for NC Games app</h2>
            </div>
          </div>
          <a className="prev" onClick={() => plusSlides(-1)}>
            ❮
          </a>
          <a className="next" onClick={() => plusSlides(1)}>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
