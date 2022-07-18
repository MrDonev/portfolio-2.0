import '../../Styles/Header/Header.css';
import logo from '../../Assets/images/logo.png';
import contact from '../../Assets/images/contact.png';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener(
      'change',
      () => {
        document.getElementById('app').classList.toggle('darkTheme');
        document.getElementById('label').classList.toggle('darkLabel');
      },
      []
    );
  });
  return (
    <div id="header">
      <a href="#app" id="home-link">
        <img title="Home" id="logo-img" src={logo} alt="id-logo" />
      </a>
      <h1 id="header-title">Iliya Donev Portfolio Website </h1>
      <div id="contacts-theme">
       <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label" id="label">
          <i className="fas fa-moon">🌙</i>
          <i className="fas fa-sun">🔅</i>
          <div className="ball" />
        </label> <a href="#contacts">
          <img
            title="Contact me"
            src={contact}
            alt="contact"
            id="contact-img-header"
          />
        </a>
        
      </div>
    </div>
  );
};

export default Header;
