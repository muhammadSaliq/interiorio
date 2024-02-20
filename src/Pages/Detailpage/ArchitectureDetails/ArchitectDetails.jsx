import React, { useEffect } from "react"
import Archigallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/ArchiGallery";
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import intimg from '../../../Assets/archib.jpg'
import archibg1 from '../../../Assets/archi1.png'
import archibg2 from '../../../Assets/archi2.png'
import archibg3 from '../../../Assets/archi3.png'

const ArchitectDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="Living Rooms" img={intimg}/>
<DetailSlide heading="Designing Tomorrow's Landmarks, Today" description="Welcome to Modern Furnishers, your premier destination for comprehensive interior architecture and construction services. We specialize in creating innovative and functional spaces that elevate the way you live, work, and interact. With a dedicated team of architects, engineers, and craftsmen, we offer end-to-end solutions tailored to your unique needs and aspirations." img1= {archibg1} img2={archibg2} img3={archibg3}/>
<Archigallery/>
<FooterBar/>
</>
  )
}

export default ArchitectDetails;