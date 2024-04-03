import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddShop = () => {

  const navigate = useNavigate();
    const [name, setname] = useState()
    const [price, setprice] = useState()
    const [description, setdescription] = useState()

    const [image1, setimage1] = useState([]);


    const buttonStyle2 = {
      color: 'white',
      fontWeight: 'bold',
      padding: '8px 16px',
      marginTop: '12px',
      cursor: 'pointer',
    };
    const handleChange = (e) => {
      setimage1({ ...image1, [e.target.name]: e.target.files });
      };
    const handleFileChange = (event) => {
      // Ensure only up to 8 files are selected
      setimage1(event.target.files);

    };
    


 const handleUpload = async () => {
    alert("Product Added Suceesfully ");
console.log("img",image1)


    if (!image1 || image1.length === 0) {
      alert("image 1 required")
      return;
    }
   

    const formData = new FormData();
    for (let i = 0; i < image1.length; i++) {
      formData.append("images", image1[i]);
    }
   
   
    formData.append("name", name);
    formData.append("price", price);

  
    try {
        if (name && price && image1) {
      const response = await axios.post(
        "http://localhost:8000/addshopsell",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      // Handle response from backend if needed
    }
    else {
        console.log("error")
    }
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };
  return (
        <>
                <button style={buttonStyle2} onClick={()=>{navigate(`/Addsimage`, { replace: true }) }} className='inline-block bg-red-700'>Add Images</button>
                <button style={buttonStyle2} onClick={()=>{navigate(`/manageshop`, { replace: true }) }} className='inline-block bg-red-700'>manage Shop</button>

<h1 className='text-3xl font-bold text-black text-center mt-5'>Add Shop</h1>
        <div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
        <TextField fullWidth onChange={(event) => { setname(event.target.value);  }} placeholder='Enter Title' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white bg-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>
  

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <TextField fullWidth  onChange={(event) => { setprice(event.target.value);  }} placeholder='Enter Price' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white bg-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>

  </div>
  </div>

  <div className="grid md:grid-cols-1 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange} />

  </div>

  </div>

  <button type="submit" onClick={handleUpload} className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">Add shop</button>
</div>

        </>

  );
}

export default AddShop;
