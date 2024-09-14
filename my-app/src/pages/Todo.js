import React, { useState } from 'react'

function Todo() {
    const[todolist, setTodo] = useState([
        {Title: "Task 1", Description: "shopping"},
        {Title: "Task 2", Description: "visit park"}
    ]);
    const [input, setInput] = useState({Title:'', Description:''})
    const deletespecificTodo = (item)=>{
        const newData = todolist.filter(element => element !=item)
        setTodo(newData)
    }
  return (
  <>
    <div className='conatiner p-4'>
        <h1>Todo list</h1>

        <form class='m-3' onSubmit={(e)=>{e.preventDefault();
        setTodo([...todolist,input])
        setInput({Title:'', Description:''})

        }}>
  <div className='mb-3'>
    <input type="text" value={input.Title} onChange={(e)=>setInput({...input, Title:e.target.value})} class="form-control" placeholder='Title' />
  </div>
  <div className='mb-3' >
    <textarea class="form-control" value={input.Description} onChange={(e)=>setInput({...input, Description:e.target.value})} placeholder='Description' rows="4"></textarea>
  </div>
  <button type='submit'class="btn btn-primary btn-block mb-4">submit</button>
</form> 

<table class="table">
  <thead>
    <tr>
      <th scope="col">s no</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {todolist.map((item,index)=>{
        const sno = index+1;

        return(
    <tr>
      <th scope="row">{sno}</th>
      <td>{item.Title}</td>
      <td>{item.Description}</td>
      <td>
        <div className='d-flex'>
            <button type="button" class="btn btn-danger" onClick={()=>deletespecificTodo(item)}>Delete</button>
            &nbsp;
            <button type="button" class="btn btn-info" onClick={()=>{setEdit(index); setInput({})}}>Edit</button>
        </div>
      </td>
    </tr>
    

  )  })}
  {todolist.length === 0 &&
    <tr>
        <td colSpan={4}> No record found</td>
        </tr>}
   
  </tbody>
</table>
 </div>
    </>

  )
}

export default Todo