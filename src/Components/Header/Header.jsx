import '../../Styles/Header/Header.css';
import logo from '../../Assets/images/logo.png';
import { useRef } from 'react';
import { useIsInViewport } from '../../Assets/utils/navSelector';

const Header = () => {
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
    <div ref={ref} id="header">
      <img id="logo-img" src={logo} alt="id-logo" />
      <h1 id="header-title">Iliya Donev Full Stack Developer </h1>
    </div>
  );
};

export default Header;
