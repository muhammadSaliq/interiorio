import React from 'react';
import { Carousel } from 'flowbite-react';
import img1 from '../../../Assets/mainbanner.jpg';
import img2 from '../../../Assets/mainbanner2.jpg';
import img3 from '../../../Assets/mainbanner3.jpg';

function Corousels() {
  const divStyle = {
    backgroundImage: `url('${img1}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    };
    const divStyle2 = {
      backgroundImage: `url('${img2}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      };
      const divStyle3 = {
        backgroundImage: `url('${img3}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        };
        
  return (
        <>
          <div className="h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400" style={divStyle}>
          <p className='font-bold text-3xl sm:text-5xl text-white text-center'>Where Creativity Meets Craftsmanship</p>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400" style={divStyle2}>
        <p className='font-bold text-3xl text-white sm:text-5xl text-center'>Designing Dreams, Building Realities</p>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400" style={divStyle3}>
        <p className='font-bold text-3xl text-white sm:text-5xl text-center'>Tailored Designs for Modern Living</p>
        </div>
      </Carousel>
    </div>
        </>
  );
}

export default Corousels;