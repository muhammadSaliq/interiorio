import { Link } from 'react-router-dom';
import './section3.css'
import React, { useState } from 'react';
import archi from '../../../Assets/archim.png'
import sec3img1 from '../../../Assets/sec3img1.png'
import sec3img2 from '../../../Assets/sec3img2.png'
import sec3img3 from '../../../Assets/sec3img3.png'
import sec3img4 from '../../../Assets/sec3img4.png'
import sec3img5 from '../../../Assets/sec3img5.png'
import sec3img6 from '../../../Assets/sec3img6.png'

const Section3 = () => {
const [hover, sethover] = useState(false)


  return (
    <>
        <div className='ml-4 md:ml-16 p-4 mb-8'>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl md:text-3xl font-bold mt-6'>Our Projects </div>

  <div className='w-full md:w-72 border-2 border-amber-400'>
    {/* Content for the inner div */}
  </div>
</div>

    <div className='flex  justify-evenly flex-wrap my-4 ' >
    <div className="container">
   <div className="row">
    <div className="col-lg-12">
       <div className="featuredPropBox">
        <ul>
           <li style={{ backgroundImage:`url(${sec3img1})`}}> 
           <Link to={'/Album'}>
             <div className="fplogo"><p className='font-bold text-lg text-white sm:text-2xl lg:text-4xl text-center'>Residential</p></div>
             <div className="fptext">
              <p>In residential interior design, the primary focus is on understanding the unique needs and lifestyles of the homeowners. The goal is to create spaces that not only showcase a high level of aesthetics but also cater to the practical requirements of daily living. Each project is approached with creativity, functionality, and personalization.</p>
            </div>
            </Link>

              </li>
           <li style={{ backgroundImage:`url(${sec3img2})`}}> <Link to={'/Album'}>
             <div className="fplogo"><p className='font-bold text-white text-lg sm:text-2xl lg:text-4xl text-center'>Corporate</p></div>
             <div className="fptext">
              <p>Corporate interior design begins with a deep understanding of the client's brand, identity, and corporate culture. Designers work to integrate the company's values and mission into the physical space, creating an environment that aligns with the brand image.</p>
            </div>
                       </Link>
 </li>
           <li style={{ backgroundImage:`url(${sec3img3})`}}> <Link to={'/Album'}>
             <div className="fplogo"><p className='font-bold text-white text-lg sm:text-2xl lg:text-4xl text-center'>Commercial</p></div>
             <div className="fptext">
              <p>Commercial interior designers work on a wide range of spaces, including offices, retail stores, restaurants, hotels, healthcare facilities, educational institutions, and public spaces. Each type of commercial project has its unique requirements, necessitating a tailored approach.</p>
            </div>
                       </Link>
 </li>
          
          
             <li style={{ backgroundImage:`url(${sec3img4})`}}> <Link to={'/Album'}>
             <div className="fplogo"><p className='font-bold text-white text-lg sm:text-2xl lg:text-4xl text-center'>Retail/Shops</p></div>
             <div className="fptext">
              <p>the primary focus is on creating a customer-centric environment that encourages exploration, engagement, and ultimately, purchases. Designers strategically plan layouts and visual elements to guide customers through a compelling and immersive journey.</p>
            </div>
                       </Link>
 </li>
           <li style={{ backgroundImage:`url(${sec3img5})`}}> <Link to={'/Album'}>
             <div className="fplogo"><p className='font-bold text-white text-lg sm:text-2xl lg:text-4xl text-center'>Studios</p></div>
             <div className="fptext">
              <p>Interior designing in 3D studio projects involves creating immersive and realistic virtual environments through the use of advanced 3D modeling and rendering techniques. This process involves meticulous detailing of architectural elements, furniture, lighting, and decor to achieve a high level of realism.</p>
            </div>
                       </Link>
 </li>
           <li style={{ backgroundImage:`url(${sec3img6})`}}> <Link to={'/Album'}>
             <div className="fplogo"><p className='font-bold text-white text-lg sm:text-2xl lg:text-4xl text-center'>Rooms</p></div>
             <div className="fptext">
              <p>Based on the client's preferences and the intended purpose of the room, designers develop a style and theme for the space. This involves selecting color palettes, textures, and design elements that create a harmonious and visually pleasing atmosphere.</p>
            </div>
                       </Link>
 </li>
         </ul>
      </div>
     </div>
  </div>
 </div>
    </div>

    </>
  );
}

export default Section3;
