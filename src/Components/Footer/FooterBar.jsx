import React from 'react';
import { Link } from "react-router-dom";
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../../Assets/logonew.png'


function FooterBar() {
  let cssfoot = "bg-gradient-to-b from-gray-700 to-slate-200"
  return (
    <Footer container className='bg-gradient-to-b from-white to-slate-300 '>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img src={logo} alt="logo" className=' sm:h-40 h-24' />

          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-16 mr-0 sm:mr-24 mt-6 sm:mt-0">

          <div>
              <Footer.Title title="Projects" className='text-black dark:text-black font-serif'/>
              <Footer.LinkGroup col>
                <Link to={'/Album'}>
                <Footer.Link className='text-black font-serif'>Residential</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black font-serif'>Corporate</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black font-serif'>Commercial</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black font-serif'>Retails</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black font-serif'>Studios</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black font-serif'>Rooms</Footer.Link>
                </Link>
              </Footer.LinkGroup>
            </div>

          <div>
              <Footer.Title title="Services" className='text-black dark:text-black font-serif'/>
              <Footer.LinkGroup col>
                <Link to={'/modularkitchen'}>
                <Footer.Link className='text-black font-serif'>Interior Design</Footer.Link>
                </Link>
                <Link to={'/bedrooms'}>
                <Footer.Link className='text-black font-serif'>Exterior Design</Footer.Link>
                </Link>
                <Link to={'/livingroom'}>
                <Footer.Link className='text-black font-serif'>Construction</Footer.Link>
                </Link>
                <Link to={'/Furnituredetails'}>
                <Footer.Link className='text-black font-serif'>Furniture</Footer.Link>
                </Link>
                <Link to={'/bathroom'}>
                <Footer.Link className='text-black font-serif'>Gardening</Footer.Link>
                </Link>
                <Link to={'/Homeoffice'}>
                <Footer.Link className='text-black font-serif'>Studio</Footer.Link>
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="about" className='text-black dark:text-black font-serif'/>
              <Footer.LinkGroup col>
                <Link to={'/About'}>
                <Footer.Link className='text-black font-serif'>About Us</Footer.Link>
                </Link>
                <Link to={'/'}>
                <Footer.Link className='text-black font-serif'>Home</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black font-serif'>Gallery</Footer.Link>
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className='text-black dark:text-black font-serif'/>
              <Footer.LinkGroup col>
               {/* <Footer.Link href="#"className='text-black'>Instagram</Footer.Link> */}
               <Link to='https://www.facebook.com/MODERNDESIGNFURNISHERS9/' target='_blank'>
                <Footer.Link  className='text-black font-serif'>Facebook</Footer.Link>
                </Link>
                <Footer.Link  className='text-black font-serif'>Instagram</Footer.Link>
                <Footer.Link  className='text-black font-serif'>Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/*}
            <div>
              <Footer.Title title="Legal" className='text-black' />
              <Footer.LinkGroup col>
                <Link to='/privacypolicy'>
                <Footer.Link className='text-black'>Privacy Policy</Footer.Link> </Link>
                <Link to='/terms&conditon'>
                <Footer.Link className='text-black'>Terms &amp; Conditions</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
*/}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Link to='https://londonlogodesigners.co.uk/'>
          <Footer.Copyright by="LondonLogoDesigners" year={2024} className='text-black' />
          </Link>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
           {/*} <Footer.Icon href="#" icon={BsFacebook} className='headcolors'/>
            <Footer.Icon href="#" icon={BsInstagram} className='headcolors' />
            <Footer.Icon href="#" icon={BsTwitter} className='headcolors' />
            <Footer.Icon href="#" icon={BsGithub} className='headcolors'/>
<Footer.Icon href="#" icon={BsDribbble} className='headcolors'/> 
        <img src={insta} className="mr-3 inline h-7 " alt="Flowbite React Logo" />
        <img src={phone} className="mr-3 inline h-7 " alt="Flowbite React Logo" /> */}
       <a href="https://www.facebook.com/MODERNDESIGNFURNISHERS9/" target='_blank'> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" className="mr-3 inline h-7 " alt="Facebook logo" /></a>
       <a href="https://www.facebook.com/MODERNDESIGNFURNISHERS9/" target='_blank'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" className="mr-3 inline h-7 " alt="Facebook logo" /></a>
       <a href="https://www.facebook.com/MODERNDESIGNFURNISHERS9/" target='_blank'> <img src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" className="mr-3 inline h-7 " alt="Facebook logo" /></a>

          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterBar;
