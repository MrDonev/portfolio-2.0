import '../../Styles/Navigation/Nav.css'
// import { navSelect } from '../../Assets/utils/navSelector';

const Nav =()=>{
    
    return<div id='nav'>
     
       <a className='navigation' href='#app' title='Home' />
        <a className='navigation' href='#about' title='About' />
        <a className='navigation' href='#projects' title='Projects' />
        <a className='navigation' href='#articles' title='Articles' />
        <a className='navigation' href='#contacts' title='Contacts' />
    </div>
}

export default Nav;