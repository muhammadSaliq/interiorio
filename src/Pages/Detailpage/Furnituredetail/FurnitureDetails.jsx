import React, { useEffect } from "react"
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import FurniGallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/FurniGallery";
import imgs from '../../../Assets/furnib.jpg'
import intimg1 from '../../../Assets/furni1.png'
import intimg2 from '../../../Assets/furni2.png'
import intimg3 from '../../../Assets/furni3.png'

const FurnitureDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="Custom Furniture" img={imgs}/>
<DetailSlide heading="Elevate Your Space with Custom Craftsmanship" description="Welcome to Modern Furnishers, where luxury meets craftsmanship in the realm of custom furniture design. Our bespoke furniture services offer discerning clients the opportunity to create truly unique pieces that reflect their individual style, taste, and personality. From concept to creation, our team of skilled artisans and designers is dedicated to bringing your vision to life with impeccable craftsmanship and attention to detail." img1= {intimg1} img2={intimg2} img3={intimg3}/>
<FurniGallery/>
<FooterBar/>
</>
  )
}

export default FurnitureDetails;