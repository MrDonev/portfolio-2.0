import '../../Styles/Home/Home.css';
import gif from '../../Assets/images/web.png';
import '@animxyz/core';

const Home = () => {
  return (
    <div id="home">
      <img id="home-img" src={gif} alt="home" />
      <p id="home-p">
        Hello and welcome to my portfolio website! My name is Iliya and I am on
        a journey to becoming a successful full stack developer! Fresh out of
        Northcoders bootcamp, I am looking forward to continue learning new
        technologies and gain experience in the field!
      </p>
    </div>
  );
};

export default Home;
