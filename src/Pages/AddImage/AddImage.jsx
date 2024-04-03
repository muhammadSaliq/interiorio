import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddImage = () => {

  const navigate = useNavigate();
    const [service, setservice] = useState()
    const [project, setproject] = useState()
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
   
   
    formData.append("service", service);
    formData.append("project", project);
    formData.append("description", description);

  
    try {
        if (service && project && image1) {
      const response = await axios.post(
        "http://localhost:8000/addimagetest",
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
                <button style={buttonStyle2} onClick={()=>{navigate(`/manageimage`, { replace: true }) }} className='inline-block bg-red-700'>Delete Images</button>
                <button style={buttonStyle2} onClick={()=>{navigate(`/addshop`, { replace: true }) }} className='inline-block bg-red-700'>Add Shop</button>

<h1 className='text-3xl font-bold text-black text-center mt-5'>Add images</h1>
        <div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
      <select id="project" name='project' onChange={(event) => {setservice (event.target.value); }} className="bg-white text-black text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
    <option value="Select Service">Select Service</option>
    <option value="Modular Kitchen">Modular Kitchen</option>
        <option value="Bed Room">Bed Room</option>
        <option value="Living Room">Living Room</option>
        <option value="Custom Made Furniture">Custom Made Furniture</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Home Office">Home Office</option>

</select>

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <select id="service" name='service' onChange={(event) => { setproject(event.target.value);}} className="bg-white text-black text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option value="Project Type">Project Type</option>
        
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
        <option value="Corporate">Corporate</option>
        <option value="Shops">Shops</option>
        <option value="Studios">Studios</option>
        <option value="Rooms">Rooms</option>
</select> 
  </div>
  </div>

  <div className="grid md:grid-cols-1 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange} />

  </div>

  </div>

  <TextField fullWidth multiline maxRows={6}  onChange={(event) => { setdescription(event.target.value);  }} placeholder='Enter Description' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white bg-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>
  <button type="submit" onClick={handleUpload} className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">Add Image</button>
</div>

        </>

  );
}

export default AddImage;
