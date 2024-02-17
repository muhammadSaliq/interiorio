import React from 'react';
import NavbarMain from '../../Components/navbars/Navbarmain/NavbarMain';
import Corousels from '../../Components/Homecomponent/Corousel/Corousels';
import Section1 from '../../Components/Homecomponent/Section1/Section1';
import Section2 from '../../Components/Homecomponent/Section2/Section2';
import Section3 from '../../Components/Homecomponent/Section3/Section3';
import FooterBar from '../../Components/Footer/FooterBar';
import Section1n from '../../Components/Homecomponent/Section1/Section1n';
import Reviews from '../../Components/Homecomponent/Reviews/Reviews';
import Whatsappbtn from '../../Components/Whatsappbtn/Whatsappbtn';
import CcorouselNew from '../../Components/Homecomponent/Corousel/CcorouselNew';
import HomeaLane from '../../Components/Homecomponent/HomelanesSecction/HomeLane';
import HomeSteps from '../../Components/Homecomponent/Homesteps/HomeSteps';
import HomeSubLast from '../../Components/Homecomponent/HomeSublast/HomeSubLast';

const Home = () => {

  return (
    <div>
        <NavbarMain/>
       {/*} <Corousels/> */}
        <CcorouselNew/>

        <Section1n/>
        <Section2/>
        <HomeaLane/>
        <HomeSteps/>
        <Section3/>
        <Reviews/>
        <HomeSubLast/>
        <FooterBar/>
    </div>
  )
}

export default Home