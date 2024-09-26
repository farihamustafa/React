import React,{useState,createContext,useContext} from 'react'

const formContext = createContext();
export default function Form() {
    const [data,setData]=useState({});
  return (
    <formContext.Provider value={{data,setData}}>
    <div>Form</div>
    <Step1/>
    </formContext.Provider>
  )
}
function Step1(){
    const {data,setData} = useContext(formContext)
    return(
        <>
        <label>Enter Name</label>
        <input value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} />
        <br/>
        <Step2/>
        </>
    )
}
function Step2(){
    const {data,setData} = useContext(formContext)
    return(
        <>
        <label>Enter Email</label>
        <input value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
        <Step3/>
        </>
    )
}
function Step3(){
    const {data} = useContext(formContext)
    return(
        <ul>
            <li>Name:{data.name || 'N/A'}</li>
            <li>email:{data.email || 'N/A'}</li>
        </ul>
    )
}