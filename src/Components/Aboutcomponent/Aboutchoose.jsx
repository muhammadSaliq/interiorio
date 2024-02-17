import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgimg from '../../Assets/mainbanner.jpg'
const AboutChoose = () => {
const [hover, sethover] = useState(false)

const divStyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px', // Adjust the width as needed
    height: '200px',
  };

  return (
    <>
    <div style={divStyle}>
    <div className='ml-4 md:ml-16 pt-8 '>
  <div style={{ "textTransform": "uppercase" }} className='text-center text-white text-3xl md:text-3xl font-bold mt-6'>Why Choose Us? </div>


</div>
    <div className='flex  justify-evenly flex-wrap pt-12 py-16' >
      <Link to={'/interiordesign'}>
    <div style={containerStyle} className='mt-4 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
<p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'> Experienced Staff</p>
<p className='text-white font-semibold text-base text-center mt-4'>our experienced staff brings unparalleled expertise and creativity to every project,</p>
</div>
</Link> 
<Link to={"/exteriordetails"}>
<div style={containerStyle} className='mt-4 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'>Creative Designers</p>
        <p className='text-white font-semibold text-base text-center mt-4'>our team of creative designers is dedicated to transforming your space into a work of art</p>

      </div>
      </Link>
      <Link to={"/Architecturedetails"}>
      <div style={containerStyle} className='mt-4 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'>Free Consultation</p>
        <p className='text-white font-semibold text-base text-center mt-4'> we offer complimentary consultations to help you envision the perfect design for your space</p>

      </div>
      </Link>

    
      </div>
      </div>
    </>
  );
}

export default AboutChoose;
