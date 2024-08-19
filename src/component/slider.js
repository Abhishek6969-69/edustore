import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
  return (
    <div className="w-full h-auto mx-auto mt-8 md:w-3/4 lg:w-2/3">
      <AwesomeSlider animation="cubeAnimation" className="tailwind-slider">
        <div  data-src="https://m.media-amazon.com/images/I/71293gyogZL._AC_UL800_.jpg" className="w-[100px]  " />
        <div data-src="https://m.media-amazon.com/images/I/415yl0HeDQL._AC_UL800_.jpg" className="w-full h-full object-cover" />
        <div data-src="https://m.media-amazon.com/images/I/71K84j2O8wL._AC_UL800_.jpg" className="w-full h-full object-cover" />
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
