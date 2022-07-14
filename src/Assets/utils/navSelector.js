import {useEffect, useRef, useState, useMemo} from 'react';

// export const navSelect = ({ target }) => {
// //   const nodes = document.getElementById('nav').childNodes;
// //  nodes.forEach(node=>{
// //     node.hash===target.hash ? 
// //     target.classList.add('selectedNav') :
// //     node.classList.remove('selectedNav')
// //  })

// };

export const useIsInViewport=(ref) =>{
   const [isIntersecting, setIsIntersecting] = useState(false);
 
   const observer = useMemo(
     () =>
       new IntersectionObserver(([entry]) =>
         setIsIntersecting(entry.isIntersecting),
       ),
     [],
   );
 
   useEffect(() => {
     observer.observe(ref.current);
 
     return () => {
       observer.disconnect();
     };
   }, [ref, observer]);
 
   return isIntersecting;
 }