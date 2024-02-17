import React from 'react';
import './section1.css'
import imgs from '../../../Assets/section1-2.png'

const Section1n = () => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '600px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '500px',
    height: '500px',
    marginBottom: '16px',
  };

  return (
    <div className='flex  justify-evenly flex-wrap my-12'>
             <div style={containerStyle} >
        <img src={imgs} alt="Fairs" style={imageStyle} className='rotates mt-12 pl-1 pr-1 rounded-full'/>
      
      
      </div>
      <div style={containerStyle} className='animated fadeInLeft'>
        <h1 className='font-extrabold text-5xl mb-6 mt-16 text-yellow-700 '>WELCOME TO </h1>
        <h1 className='font-extrabold text-5xl mb-6 mt-3 '>Modern Furnishers </h1>

        <p className='mt-6 mb-6'>Modern Furnishers is a premier destination for individuals seeking innovative solutions for their interior and exterior design needs. Specializing in custom-made furniture and comprehensive design services, we offer a unique blend of creativity, functionality, and craftsmanship to enhance any space.
</p>
<h1 className='font-bold my-4 '>Our range of services includes interior design, exterior design, and bespoke furniture creation. </h1>
<p>At Modern Furnishers, we understand that each client has unique preferences and requirements when it comes to designing their living or working environment. That's why we take a personalized approach to every project, collaborating closely with our clients to bring their vision to life.
From concept development to final installation, we prioritize quality, attention to detail, and customer satisfaction. With a focus on modern aesthetics, practicality, and sustainability, we strive to create spaces that reflect our clients' lifestyles, tastes, and values.
</p>
      </div>
 
  
    </div>
  );
}

export default Section1n;
