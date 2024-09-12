import React, { useState } from 'react'
const formstructure ={name:'',email:'',message:''}

function Contact() {
  const[data,setData]=useState(formstructure);
  return (
  <center>
      <form className='mt-5' style={{width: "26rem"}} onSubmit={(e)=>{
        e.preventDefault()
        console.log(data)
        setData(formstructure)
      }}>
    <div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label" for="form4Example1">Name</label>
      <input value={data.name} onChange={(e)=>setData({ ...data,name:e.target.value})}  type="text" id="form4Example1" class="form-control" />
      
    </div>
  
    <div data-mdb-input-init class="form-outline mb-4">
      <label class="form-label" for="form4Example2">Email address</label>
      <input value={data.email} onChange={(e)=>setData({ ...data,email:e.target.value})}  type="text" id="form4Example1" class="form-control" />
      
    </div>
  
    <div data-mdb-input-init class="form-outline mb-4">
      <label class="form-label" for="form4Example3">Message</label>
      <input value={data.message} onChange={(e)=>setData({ ...data,message:e.target.value})}  type="text" id="form4Example1" class="form-control" />
      
    </div>
  
    <button type="submit" data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Send</button>
  </form>
  </center>
  )
}

export default Contact
