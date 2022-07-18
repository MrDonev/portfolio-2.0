import { useEffect, useState, useMemo } from 'react';

export const useIsInViewport = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};

export const boxAnimation = ({ target }) => {
  const currTarget = target.nextElementSibling;
  console.log(currTarget);
  if (currTarget.classList.contains('close')) {
    currTarget.classList.remove('close');
    currTarget.classList.add('open');
    setTimeout(() => {
      currTarget.classList.remove('open');
      currTarget.classList.add('close');
    }, 4500);
  } else {
    currTarget.classList.remove('open');
    currTarget.classList.add('close');
  }
};

export const changeTheme = () => {
  if ([...document.getElementById('app').classList][0]==='app') {
    document.getElementById('app').classList.add('darkTheme');
    document.getElementById('app').classList.remove('app')
  } else {
  document.getElementById('app').classList.remove('darkTheme')
  document.getElementById('app').classList.add('app');
  }
};
