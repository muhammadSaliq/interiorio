import React, { useEffect } from "react"
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import Exteriorgallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/ExteriorGallery";
import imgs from '../../../Assets/exteriorb.jpg'
import intimg1 from '../../../Assets/exterior1.png'
import intimg2 from '../../../Assets/exterior2.png'
import intimg3 from '../../../Assets/exterior3.png'

const ExteriorDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="Bed Rooms" img={imgs}/>
<DetailSlide heading="Designing Your Room Escape" description="Welcome to Modern Furnishers, where the beauty of modern design seamlessly extends beyond interior spaces to transform the exterior landscapes. Our dedicated team of designers brings creativity, innovation, and expertise to every outdoor project, whether it's a residential garden, commercial courtyard, or urban rooftop oasis. With a keen eye for detail and a commitment to excellence, we are here to redefine outdoor living and enhance the curb appeal of your property. we understand that the exterior of your property is just as important as the interior. Our approach to exterior design begins with a thorough understanding of your needs, preferences, and the unique characteristics of your outdoor space. "
 img1= {intimg1} img2={intimg2} img3={intimg3}/>
<Exteriorgallery/>
<FooterBar/>
</>
  )
}

export default ExteriorDetails;