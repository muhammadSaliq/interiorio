import React, { useEffect, useState } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import NavContact from '../Navcontact/NavContact';
import logo from '../../../Assets/logonew.png'

const NavbarMain = () => {

  return (
    <div>
      <NavContact/>
      <Navbar fluid rounded className='bg-white dark:bg-white mb-6 shadow-xl  '>
      <Navbar.Brand href="https://interiortest.vercel.app/">
        <img src={logo} className="mr-3 h-16 sm:h-24" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
        <Navbar.Link className='text-xl divhead font-semibold text-black '> 
          Home
        </Navbar.Link>
        </Link>
        <Link to={"/About"}>
        <Navbar.Link  className='text-xl divhead font-semibold text-black '> About Us</Navbar.Link> </Link>
       <Dropdown
          arrowIcon={false}
          inline
          label={
            <Navbar.Link className='text-xl divhead font-semibold text-black '>  Services</Navbar.Link>
          }
        >
          <Link to={"/interiordesign"}>
          <Dropdown.Item >Modular Kitchen</Dropdown.Item>
          </Link>
          <Link to={"/exteriordetails"}>
          <Dropdown.Item >Bed Room</Dropdown.Item>
          </Link>
          <Link to={"/Architecturedetails"}>
          <Dropdown.Item>Living Room</Dropdown.Item>
          </Link>
          <Link to={"/Furnituredetails"}>
          <Dropdown.Item >Custom Made Furniture</Dropdown.Item>
          </Link>
          <Link to={"/Landscapingdetails"}>
          <Dropdown.Item >Bathroom</Dropdown.Item>
          </Link>
          <Link to={"/Studiodetails"}>
          <Dropdown.Item >Home Office</Dropdown.Item>
          </Link>
        </Dropdown>
        <Link to={"/Album"}>
        <Navbar.Link className='text-xl divhead font-semibold text-black '> Gallery</Navbar.Link>
        </Link>
        <Link to={"/Shop"}>
        <Navbar.Link className='text-xl divhead font-semibold text-black '> Shop Now</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
</div>
  )
}

export default NavbarMain