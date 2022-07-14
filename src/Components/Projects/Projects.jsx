import '../../Styles/Projects/Projects.css';
import { useRef } from 'react';
import { useIsInViewport } from '../../Assets/utils/navSelector';

const Projects = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  if (isInViewport) {
    console.log(`projects in viewport`);
    document.getElementById('nav').childNodes.forEach((node) => {
      if (node.hash === '#projects') {
        node.classList.toggle('selectedNav');
      } else {
        node.classList.remove('selectedNav');
      }
    });
  }
  return (
    <div ref={ref} id="projects">
      <div className="horizontal-scroll-wrapper squares">
        <div>aaaa</div>
        <div>bbbb</div>
        <div>cccc</div>
        <div>dddd</div>
        <div>ewww</div>
        <div>ffff</div>
      </div>
    </div>
  );
};

export default Projects;
