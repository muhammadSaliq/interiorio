import React, { useEffect } from "react"
import Archigallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/ArchiGallery";
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import Detailgallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/DetailGallery";
import intimg from '../../../Assets/interiorb.jpg'
import intimg1 from '../../../Assets/interior1.png'
import intimg2 from '../../../Assets/interior2.png'
import intimg3 from '../../../Assets/interior3.png'

const InteriorDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="interior Designs" img={intimg}/>
<DetailSlide heading="Innovative Designs, Timeless Elegance" description="Welcome to Modern Furnishers, where innovation meets sophistication in the realm of interior design. Our esteemed team of designers is dedicated to transforming your space into a harmonious blend of contemporary aesthetics and functional excellence. Whether you're revamping a residential abode, a commercial space, or seeking expert guidance for a renovation project, we are here to turn your vision into reality. we believe that every space has its unique personality waiting to be revealed. Our approach begins with a comprehensive understanding of your preferences, lifestyle, and aspirations for the space. Through close collaboration and attentive listening, we craft personalized design solutions tailored to your needs." img1= {intimg1} img2={intimg2} img3={intimg3}/>
<Detailgallery/>
<FooterBar/>
</>
  )
}

export default InteriorDetails;