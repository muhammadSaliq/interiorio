import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const ManageShop = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [Delete , setdelete] = useState(false);
    
      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',

        width: '300px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    
      const imageStyle = {
        width: '250px',
        height: '200px',
        marginBottom: '16px',
      };
    
      const buttonStyle = {
        background: 'black',
        color: 'white',
        fontWeight: 'bold',
        padding: '8px 16px',
        marginTop: '12px',
        cursor: 'pointer',
        width: '80px'
      };
      const buttonStyle2 = {
        color: 'white',
        fontWeight: 'bold',
        padding: '8px 16px',
        marginTop: '12px',
        cursor: 'pointer',
      };
      const getAllProducts = async () => {
        try {
          const response = await axios.get(`https://cobalt-blue-jellyfish-boot.cyclic.app/Allshop`);
          console.log("response: ", response);
          console.log(products);
          setProducts(response.data.data);
        } catch (error) {
          console.log("error in getting all requests", error);
        }
      };
      const deleteData = async (id)=>{
        try {
          const response = await axios.delete(`https://cobalt-blue-jellyfish-boot.cyclic.app/deleteshop/${id}`)
          console.log("response: ", response.data);
          setdelete(!Delete)
        } catch (error) {
          console.log("error in deleting all requests", error);
        }
        alert("Product deleted");
      };
      useEffect(() => {
        console.log('asdasd')
        getAllProducts()
    }, [Delete , productsBoolean ])
  return (
        <>
        <button style={buttonStyle2} onClick={()=>{navigate(`/addshop`, { replace: true }) }} className='inline-block bg-red-700'>Add shops</button>

        <div className='flex  justify-evenly flex-wrap my-4'>
          {products.map((value) => (
      <div style={containerStyle}>
      <Card
      className="max-w-sm"
    >
        <img src={value.imageUrl} alt="img" style={imageStyle}/>

      <p className="font-normal text-gray-700 ">
       Service: {value.service} , Project: {value.project}  <br/>
       description: {value.description} <br />
      <button style={buttonStyle} onClick={()=>{deleteData(value._id)}} className='inline-block'>Delete</button>

      </p>
    </Card>
    
      </div>
          ))}
    </div>

        </>

  );
}

export default ManageShop;
