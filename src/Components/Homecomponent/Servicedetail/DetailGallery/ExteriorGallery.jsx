import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

const Exteriorgallery = () => {
const [hover, sethover] = useState(false)
const [open, setOpen] = React.useState(false);
const [products, setProducts] = useState([]);
const [productsBoolean, setProductsBoolean] = useState(false);
const [Delete , setdelete] = useState(false);

const getAllProducts = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/exteriorimage`);
    console.log("response: ", response);
    console.log(products);
    setProducts(response.data.data);
  } catch (error) {
    console.log("error in getting all requests", error);
  }
};
useEffect(() => {
  getAllProducts()

}, [Delete , productsBoolean ])
const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const divStyle = {
  backgroundImage: `url('https://foyr.com/learn/wp-content/uploads/2021/10/rules-for-interior-designers.png')`,
  /* Other styles you might want to apply */
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px', // Adjust the width as needed

    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '390px',
    height: '200px',
    marginBottom: '16px',
  };

  return (
    <>
    <div >
        <div className='ml-4 md:ml-16 p-4 '>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl text-center md:text-3xl font-bold mt-6'>Some Glimpse of our Exterior Designs </div>

</div>
<div className='flex  justify-evenly  flex-wrap my-4 pt-12 py-16' >

{products.map((value) => (
  <>
<div onClick={handleClickOpen} style={containerStyle} className=' hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src={value.imageUrl} alt="img" style={imageStyle} />
</div>
<Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        
      >
          <Toolbar className='bg-amber-400'>
            <IconButton
              edge="start"
              color="black"
              onClick={handleClose}
              aria-label="close"
            >
              Back
            </IconButton>


          </Toolbar>
          <img className='h-full w-full' src={value.imageUrl} alt="img" />


      </Dialog>
</>

          ))}
          </div>
      </div>
    </>
  );
}

export default Exteriorgallery;
