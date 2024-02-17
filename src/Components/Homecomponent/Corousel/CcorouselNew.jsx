import React, { useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';
import img1 from '../../../Assets/mainbanner.jpg';
import img2 from '../../../Assets/mainbanner2.jpg';
import img3 from '../../../Assets/mainbanner3.jpg';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

function CcorouselNew() {
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
    height: '600px'
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
      const containerStyle2 = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '550px', // Adjust the width as needed
    height: '600px'
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
      const containerStyle3 = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px', // Adjust the width as needed
    height: '600px'
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
      const imageStyle = {
        width: '540px',
        height: '580px',
        marginBottom: '16px',
      };

      const images = ["https://super.homelane.com/updatedwebp/home-interior/kitchen-1658295960607f52d4f3cfbfe.webp","https://super.homelane.com/updatedwebp/home-interior/bedroom-1658295960607cad8dfaf3854.webp" , "https://super.homelane.com/updatedwebp/home-interior/livingroom-165829596060799c5d1ba53ed.webp"];
      const headings = [' Best Quality Service', 'Best Quality Service', 
      'Best Selling Website'];
      const paragraphs = [
        'Browse Our Collection',
        'Browse Our Collection',
        ' Browse Our Collection',
        'Browse Our Collection',
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
      const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
    
      const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setCurrentHeadingIndex((prevIndex) => (prevIndex === 0 ? headings.length - 1 : prevIndex - 1));
        setCurrentParagraphIndex((prevIndex) => (prevIndex === 0 ? paragraphs.length - 1 : prevIndex - 1));
      };
    
      const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setCurrentHeadingIndex((prevIndex) => (prevIndex === headings.length - 1 ? 0 : prevIndex + 1));
        setCurrentParagraphIndex((prevIndex) => (prevIndex === paragraphs.length - 1 ? 0 : prevIndex + 1));
      };
    
      useEffect(() => {
        const timer = setTimeout(() => {
          nextImage();
        }, 4000);
    
        return () => {
          clearTimeout(timer);
        };
      }, [nextImage]);
    

  return (
        <>
            <div className='flex  justify-evenly flex-wrap my-12' style={divStyle}>
             <div style={containerStyle} >
             <h1 className='font-bold text-4xl mb-6 mt-3 text-blue-900'>Dream Homes Begin With Dream Design </h1>
      </div>
      <div style={containerStyle2} >
        
      <div className="mx-auto relative 	" >  {/* py-2 */}
    <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="max-w-full rounded-xl" style={imageStyle}/>

    {/* Centered Heading and Paragraph */}


    {/* Left Icon */}
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">

    </div>

    {/* Right Icon */}
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">

    </div>
  </div>

      </div>
      <div style={containerStyle3} >
      <Card className="w-80 bg-transparent dark:bg-transparent border-0 shadow-xl">
      <form className="flex flex-col gap-4">
        <p className="text-2xl font-mono font-semibold">Meet A Designer</p>
        <div>
          <div className="mb-2 block ">
          </div>
          <input id="name" type="text" placeholder="Your Name" required className='h-12 rounded-xl border-b-2 bg-transparent border-b-amber-500 focus:border-b-blue-400 p-2 w-full' />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <input id="email" type="email" placeholder="Your Email" required className='h-12 rounded-xl border-b-2 bg-transparent border-b-amber-500 focus:border-b-blue-400 p-2 w-full' />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <input id="phone" type="number" placeholder="Your Phone Number" required className='h-12 rounded-xl border-b-2 bg-transparent border-b-amber-500 focus:border-b-blue-400 p-2 w-full' />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <input id="zipcode" type="number" placeholder="Your Zipcode" required className='h-12 rounded-xl border-b-2 bg-transparent border-b-amber-500 p-2 w-full' />
        </div>
        <button type="submit" className="bg-amber-400 rounded-xl h-14">Book Design Session</button>
        <p className="text-xs font-serif font-semibold text-center">Meet A Designer</p>

      </form>
    </Card>
      </div>
  
    </div>
        </>
  );
}

export default CcorouselNew;