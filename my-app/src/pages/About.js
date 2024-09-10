import { useState } from "react";


function About() {
  const[count, setCount] = useState(0)
  const [countValue, setcountValue] = useState(1)
  const [counterstatus, setcounterstatus]= useState(false);
  
  return (

    <div>
       <button className="btn btn-success mb-5" onClick={()=>setcounterstatus(!counterstatus)}>{counterstatus ? "Hid ": "Show"} Counter</button>
      {counterstatus  &&<>
     
     <input className="form-control m-5" type="number" onChange={(e)=>setcountValue(parseInt(e.target.value))}/>
      <button className='btn btn-primary m-5'onClick={()=>setCount(count+countValue)}>Count{count}</button>
      </>}
    
    </div>
  )
}

export default About
