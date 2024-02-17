import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import insta from '../../../Assets/insta.png'
import phone from '../../../Assets/phone.png'
import face from '../../../Assets/face.png'
import insta2 from '../../../Assets/instared.png'
import face2 from '../../../Assets/face2.png'
import phones from '../../../Assets/phones.png'
import addr from '../../../Assets/addr.webp'
import whats from '../../../Assets/whatsapps.webp'

const NavContact = () => {
let csss = "border-b-2 border-rose-500 text-black bg-gradient-to-r from-yellow-700 to-yellow-200"

  return (
    <Navbar fluid rounded className='border-b-2 border-rose-500 text-black bg-white dark:bg-white '>
    
    <Navbar.Brand href="">
    <img src={phones} className="mr-3 inline h-7 " alt="phone" />
      <span className="self-center whitespace-nowrap text-xs font-semibold font-sans">Call Anytime <br /> <p className='text-lg font-sans'> 0335 1329550 </p></span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <p className='text-black'>      
        <img src="https://i0.wp.com/bodybeyondlimits.com.au/wp-content/uploads/2022/07/instagram-circle-icon-png-4.png?ssl=1" className="mr-3 inline h-7 " alt="Flowbite React Logo" />
     
     <Link to='https://www.facebook.com/MODERNDESIGNFURNISHERS9/' target='_blank'>
        <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" className="mr-3 inline h-8 " alt="Flowbite React Logo" />
        </Link>

</p>
      
    </div>
    <Navbar.Collapse>
    <Navbar.Brand >
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-whatsapp-circle-1868968-1583132.png?f=webp" className="mr-3 inline h-7 " alt="phone" />
    <a href="https://wa.me/+923351329550" target='_blank' className="text-black hover:text-blue-900 ">
      <span className="self-center whitespace-nowrap text-xs font-semibold font-sans"> Whatsapp <br /> <p className='text-lg font-sans'> +92 335 1329550 </p></span>
    </a>
    </Navbar.Brand>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavContact;
