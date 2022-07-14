import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Nav from './Components/Navigation/Nav';
import './Styles/app.css'
import Projects from './Components/Projects/Projects';

const App = () => {
  
  return (
    <div id="app">
      <Header />
      <Nav/>
       <Home/>
       <About/>
       <Projects/>
    </div>
  );
};

export default App;
