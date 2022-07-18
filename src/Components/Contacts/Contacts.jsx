import '../../Styles/Contacts/Contacts.css';
import linkedin from '../../Assets/images/linkedin.png';
import github from '../../Assets/images/github.png'
import email from '../../Assets/images/email.png'
import { boxAnimation } from '../../Assets/utils/UtilityFuncs';
import { useRef } from 'react';
import { useIsInViewport } from '../../Assets/utils/UtilityFuncs';
export default function Contacts() {
    const ref = useRef(null);
    const isInViewport = useIsInViewport(ref);
    if (isInViewport) {
      document.getElementById('nav').childNodes.forEach((node) => {
        if (node.hash === '#contacts') {
          node.classList.toggle('selectedNav');
        } else {
          node.classList.remove('selectedNav');
        }
      });
    }
  return (
    <div id="contacts">
    
      <div ref={ref} className="contact-list">  
      <h1> Ways of contacting me :</h1>
        <div id="linkedin">
          <img
            id="ln-img"
            src={linkedin}
            alt="linked in"
            onClick={boxAnimation}
          />
          <div className="contacts-info close">
            <a
              href="https://www.linkedin.com/in/IDonev/"
              rel="noreferrer"
              target="_blank"
            >
              Visit LinkedIn profile
            </a>
          </div>
        </div>
        <div id="github">
          <img
            id="gh-img"
            src={github}
            alt="github"
            onClick={boxAnimation}
          />
          <div className="contacts-info close">
            <a
              href="https://www.github.com/MrDonev/"
              rel="noreferrer"
              target="_blank"
            >
              Visit GitHub profile
            </a>
          </div>
        </div>
        <div id="email">
          <img
            id="em-img"
            src={email}
            alt="email"
            onClick={boxAnimation}
          />
          <div className="contacts-info close">
            <a
              href="mailto:MrDonev@protonmail.com?subject=Interview&body=We%20would%20like%20to%20invite%20you%20to%20an%20interview!"
              rel="noreferrer"
              target="_blank"
            >
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
