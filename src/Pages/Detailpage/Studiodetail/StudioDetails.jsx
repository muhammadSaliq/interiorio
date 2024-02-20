import React, { useEffect } from "react"
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import StudioGallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/StudioGallery";
import intimg from '../../../Assets/studiob.jpg'
import intimg1 from '../../../Assets/studio1.png'
import intimg2 from '../../../Assets/studio2.png'
import intimg3 from '../../../Assets/studio3.png'

const StudioDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="Home Offices" img={intimg}/>
<DetailSlide heading="Designing Studios That Spark Innovation" description="Welcome to Modern Furnishers, where creativity and functionality converge to craft inspiring studio spaces tailored to your unique needs. Our studio designing services offer a blend of innovation, efficiency, and aesthetic appeal, ensuring that your studio becomes a space where your creative vision can thrive. Whether you're an artist, a photographer, a musician, or a filmmaker, we are dedicated to creating studio environments that inspire creativity, productivity, and innovation."
 img1= {intimg1} img2={intimg2} img3={intimg3}/>
<StudioGallery/>
<FooterBar/>
</>
  )
}

export default StudioDetails;