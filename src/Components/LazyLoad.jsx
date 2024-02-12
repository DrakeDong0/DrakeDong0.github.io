import React from 'react';
import { useInView } from 'react-intersection-observer';

const LazyLoad = ({ children, className, ...options }) => {
  const { ref, inView } = useInView(options);

  return <div ref={ref} className={inView ? className : ''}>{inView ? children : null}</div>;
};

export default LazyLoad;
