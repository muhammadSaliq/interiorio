import React, { useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';
import img1 from '../../../Assets/mainbanner.jpg';
import img2 from '../../../Assets/mainbanner2.jpg';
import img3 from '../../../Assets/mainbanner3.jpg';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

function HomeSteps() {
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
        width: '400px', // Adjust the width as needed
    
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };

      const imageStyle = {
        width: '350px',
        height: '250px',
        marginBottom: '16px',
      };
      const bdclr = {
        backgroundColor: '#fcf5ed'
      };

    
   
  return (
        <>
        <div style={bdclr}>
<div className='ml-4 md:ml-16 p-4 mb-8'>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl md:text-3xl font-bold mt-6 text-center'>Complete Modern Furnishers In 6 Easy Steps </div>

</div>
            <div className='flex  justify-evenly flex-wrap my-4'>
             <div style={containerStyle} >
             <img src="https://super.homelane.com/design/1-16581676962473b51188294a6.png" alt="img" style={imageStyle}/>
      </div>
      <div style={containerStyle} >
      <img src="https://super.homelane.com/design/2-165816769624729f5154fbba5.png" alt="img" style={imageStyle}/>
    

      </div>
      <div style={containerStyle} >
      <img src="https://super.homelane.com/design/3-1658167383566d28c8af447bb.png" alt="img" style={imageStyle}/>
      </div>
    </div>

    <div className='flex  justify-evenly flex-wrap my-4'>
             <div style={containerStyle} >
             <img src="https://super.homelane.com/design/4-165816738356647ad2bca071f.png" alt="img" style={imageStyle}/>
      </div>
      <div style={containerStyle} >
      <img src="https://super.homelane.com/design/5-16581673835660971c422323e.png" alt="img" style={imageStyle}/>
    

      </div>
      <div style={containerStyle} >
      <img src="https://super.homelane.com/design/6-16581673835667b378e6687e5.png" alt="img" style={imageStyle}/>
      </div>
    </div>
    </div>
        </>
  );
}

export default HomeSteps;