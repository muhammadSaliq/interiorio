import React, { useEffect } from "react"
import Archigallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/ArchiGallery";
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import LandscapeGallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/LandscapeGallery";
import intimg from '../../../Assets/scapeb.jpg'
import intimg1 from '../../../Assets/fountain1.png'
import intimg2 from '../../../Assets/fountain2.png'
import intimg3 from '../../../Assets/fountain3.png'

const LandscapingDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="BathRoom" img={intimg}/>
<DetailSlide heading="Where Beauty Blooms and Serenity Grows" description="Welcome to Modern Furnishers, where we extend our expertise beyond interior spaces to transform outdoor environments into stunning garden landscapes. Our gardening landscaping services offer a harmonious fusion of nature and design, creating picturesque outdoor retreats that enhance the beauty and functionality of your property. With a passion for horticulture and a commitment to excellence, our team of landscape architects and gardeners is dedicated to bringing your outdoor vision to life." 
img1= {intimg1} img2={intimg2} img3={intimg3}/>
<LandscapeGallery/>
<FooterBar/>
</>
  )
}

export default LandscapingDetails;