import React, { useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';
import img1 from '../../../Assets/mainbanner.jpg';
import img2 from '../../../Assets/mainbanner2.jpg';
import img3 from '../../../Assets/mainbanner3.jpg';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

function HomeaLane() {
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
    
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };

      const imageStyle = {
        width: '130px',
        height: '130px',
        marginBottom: '16px',
      };


    
   
  return (
        <>
<div className='ml-4 md:ml-16 p-4 mb-8'>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl md:text-3xl font-bold mt-6 text-center'>Why Modern Furnishers </div>

</div>
            <div className='flex  justify-evenly flex-wrap my-4'>
             <div style={containerStyle} >
             <img src="https://super.homelane.com/RTB/installation_days.svg" alt="img" style={imageStyle}/>
      </div>
      <div style={containerStyle} >
      <img src="https://super.homelane.com/RTB/homes_completed.svg" alt="img" style={imageStyle}/>
    

      </div>
      <div style={containerStyle} >
      <img src="https://super.homelane.com/RTB/design_experts.svg" alt="img" style={imageStyle}/>
      </div>
      <div style={containerStyle} >
      <img src="https://super.homelane.com/RTB/material_warranty.svg" alt="img" style={imageStyle}/>
      </div>
    </div>
        </>
  );
}

export default HomeaLane;