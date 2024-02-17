import React from "react"
import NavbarMain from "../../Components/navbars/Navbarmain/NavbarMain";
import FooterBar from "../../Components/Footer/FooterBar";
import HeadBar from "../../Components/navbars/Headbar/HeadBar";
import AboutChoose from "../../Components/Aboutcomponent/Aboutchoose";
import imgs from '../../Assets/interiorb.jpg'
import imgs1 from '../../Assets/interior1.png'
import imgs2 from '../../Assets/interior2.png'

const About = () => {
    
      const imageStyle = {
        width: '500px',
        height: '400px',
        marginBottom: '16px',
      };
      const containerStyle2 = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '12px',
        justifyContent: 'center',
        padding: '6px',
        width: '650px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    

  return (
    <>
    <NavbarMain/>

<HeadBar name="About Us" img={imgs}/>
    <div className='flex  justify-center flex-wrap my-4' >
    <div style={containerStyle2}>
        <h1 className="text-3xl font-bold mb-4 mt-3">Elevate Your Space with Bespoke Design Solutions</h1>
        <p className="text-black text-base ">Modern Furnishers is a leading provider of innovative and bespoke solutions for interior and exterior design, offering a comprehensive range of services to cater to diverse design needs. With a commitment to excellence, creativity, and craftsmanship, we specialize in crafting custom-made furniture pieces and delivering tailored design solutions that elevate living and working spaces to new heights.</p>
        <p className="text-black text-base mt-4 mb-3">Our interior design services encompass a wide range of styles, from modern and contemporary to classic and timeless, ensuring that we can cater to diverse tastes and preferences. </p>

      </div>
      <div style={containerStyle2}>
      <img src={imgs1} alt="img" style={imageStyle} />

      </div>

      <div style={containerStyle2}>
      <img src={imgs2} alt="img" style={imageStyle} />

      </div>
      <div style={containerStyle2}>
        <h1 className="text-3xl font-bold mb-4 mt-3">Transforming Ideas into Timeless Designs.</h1>
        <p className="text-black text-base ">At Modern Furnishers, we understand that every space has its unique personality, and we believe in harnessing the power of design to create environments that reflect the individuality and lifestyle of our clients. Whether it's a residential project, a commercial space, or an outdoor area, our team of experienced designers, architects, and craftsmen work collaboratively to transform ideas into reality, delivering stunning results that exceed expectations.


</p>
        <p className="text-black text-base mt-4 mb-3">In addition to interior design, we also offer comprehensive exterior design services, helping clients enhance their outdoor spaces with innovative landscaping, lighting, and architectural elements. 

</p>

      </div>
    </div>
<AboutChoose/>

    <FooterBar/>
    </>
  )
}

export default About;