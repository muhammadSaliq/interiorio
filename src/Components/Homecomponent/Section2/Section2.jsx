import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgimg from '../../../Assets/resizebg.png'
import interior from '../../../Assets/img6.png'
import exterior from '../../../Assets/img3.png'
import studio from '../../../Assets/img7.png'
import furni from '../../../Assets/img2.png'
import archi from '../../../Assets/img1.png'
import scapes from '../../../Assets/img5.png'

const Section2 = () => {
const [hover, sethover] = useState(false)


const divStyle = {
  backgroundImage: `url(${bgimg})`,
  /* Other styles you might want to apply */
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${interior})`,
    width: '350px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat',
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${exterior})`,
    width: '350px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat',
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle3 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${archi})`,
    width: '350px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat',
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle4 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${furni})`,
    width: '350px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat',
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle5 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${scapes})`,
    width: '350px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat'
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle6 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${studio})`,
    width: '350px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat'
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  return (
    <>
    <div style={divStyle} id='services'>
        <div className='ml-4 md:ml-16 p-4 mb-8'>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl md:text-3xl font-bold mt-6'>Services We Do </div>

  <div className='w-full md:w-72 border-2 border-amber-400' >
    {/* Content for the inner div */}
  </div>
</div>
    <div className='flex  justify-evenly flex-wrap my-4 ' >
      <Link to={'/interiordesign'}>
    <div style={containerStyle} className='border-4 rounded-xl border-amber-400 mt-4 hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
<p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'> Modular Kitchen</p>
</div>
</Link> 
<Link to={"/exteriordetails"}>
<div style={containerStyle2} className='mt-4 border-4 border-amber-400 rounded-xl hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'>Bed Room</p>
      </div>
      </Link>
      <Link to={"/Architecturedetails"}>
      <div style={containerStyle3} className='mt-4 border-4 border-amber-400 rounded-xl hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'>LLiving Room</p>
      </div>
      </Link>
</div>
<div className='flex  justify-evenly flex-wrap my-4 pb-20' >
    
      <Link to={"/Furnituredetails"}>
    <div style={containerStyle4} className='mt-4 border-4 border-amber-400 rounded-xl hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'> Bathroom</p>
      </div>
      </Link>
      <Link to={"/Landscapingdetails"}>
      <div style={containerStyle5} className='mt-4 border-4 border-amber-400 rounded-xl hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'>Custom Made Furniture</p>
      </div>
      </Link>
      <Link to={"/Studiodetails"}>
      <div style={containerStyle6} className='mt-4 border-4 border-amber-400 rounded-xl hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'> Home Office</p>
      </div>
      </Link>
      </div>
      </div>
    </>
  );
}

export default Section2;
