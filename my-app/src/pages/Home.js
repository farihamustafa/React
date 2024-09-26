import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import axios from 'axios'

function Home() {
  const [products,setProducts] = useState([]);
 
  const fetchProductAPI = async () => {
    await axios.get('https://api.escuelajs.co/api/v1/products')
    .then((response)=>{
      console.log(response.data)
      setProducts(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    fetchProductAPI()
  },[])
  return (
    <>  
    <img src='/poster1.png' style={{width:"100%",height:"600px"}} />

    <div class="container p-4">
      <h1>Products</h1>
    <div className='mt-5 row w-100 justify-content-center '>


    {products.map((item,index)=>(
      <div className='col-sm-3 p-2'>
      <Cards img={item.images[0]} title={item.title}
      desc={item.description}
      />
      </div>
    ))}

    </div>
    </div>
   
    </>
  )
}

export default Home