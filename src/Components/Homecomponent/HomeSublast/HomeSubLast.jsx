import React, { useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';
import img1 from '../../../Assets/mainbanner.jpg';
import img2 from '../../../Assets/mainbanner2.jpg';
import img3 from '../../../Assets/mainbanner3.jpg';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

function HomeSubLast() {
  const divStyle = {
    backgroundImage: `url('https://super.homelane.com/designGallery/designGalleryBg-1657090215333cfdaacbd67fe_stage.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    };
       
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px', // Adjust the width as needed
        borderRight: '2px solid #f8eeec',
        paddingRight: "30px"
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };

      const imageStyle = {
        width: '100px',
        height: '100px',
        marginBottom: '16px',
      };
      const bdclr = {
        backgroundColor: '#fcf5ed'
      };

    
   
  return (
        <>
        <div>

            <div className='flex  justify-evenly flex-wrap my-8 py-12'>
             <div style={containerStyle} >
             <img src="https://cdn-icons-png.flaticon.com/512/4400/4400863.png" alt="img" style={imageStyle}/>
             <h1 className='font-bold py-2 font-serif text-center text-lg'>Flat 10 Years Warranty</h1>
             <p className='text-sm text-center font-serif'> choose Interior design with Superior quaity material , leaving no room for defects</p>
      </div>
      <div style={containerStyle} >
      <img src="https://cdn-icons-png.flaticon.com/512/2203/2203145.png" alt="img" style={imageStyle}/>
    <h1 className='font-bold py-2 font-serif text-center text-lg'>45-day delivery</h1>
    <p className='text-sm text-center font-serif'>Get beautiful interiors for your new home in just 45 days. That’s our delivery guarantee.</p>

      </div>
      <div style={containerStyle} >
      <img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png" alt="img" style={imageStyle}/>
      <h1 className='font-bold py-2 font-serif text-center text-lg'>600+ design experts</h1>
      <p className='text-sm text-center font-serif'>Explore design ideas and co-create your dream home with our experienced designers</p>
      </div>
      <div style={containerStyle} >
      <img src="https://cdn-icons-png.flaticon.com/512/5062/5062832.png" alt="img" style={imageStyle}/>
      <h1 className='font-bold py-2 font-serif text-center text-lg'>Post-installation service</h1>
      <p className='text-sm text-center font-serif'>Complete your design journey and get unwavering support from our dedicated care team.</p>
      </div>
    </div>

    </div>
        </>
  );
}

export default HomeSubLast;