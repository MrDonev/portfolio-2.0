import '../../Styles/hamburgerMenu/hamburgerMenu.css'

const HamburgerMenu = () => {


  return (
    <div id='hamburger-menu'>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
     <li> <a href='#home'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#projects'>Projects</a></li>
      <li><a href='#contacts'>Contacts</a></li>
   
    </ul>
    </div>
  );
};

export default HamburgerMenu