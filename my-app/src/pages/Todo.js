import React, { useState } from 'react'


function Todo() {


    const [todoList , setTodoList] = useState([
        {title:"Task1",desc:"Goto Aptech"},
        {title:"Task2",desc:"Go Home"}
    ]);

    const [edit, setEdit ] = useState(null);


    const [input,setInput] = useState({title:"",desc:""})

    const deleteSpecificTodo = (item)=>{
        const newData  = todoList.filter(element=> element != item)
        setTodoList(newData)
    }


  return (
    <>
   

    <div class="container p-4">
      <h1>Todo</h1>




      <form class="m-3" onSubmit={(e)=>{
        e.preventDefault();
        if(edit !=null){
       
           todoList[edit] = input
           setEdit(null)
        }
        else{
            setTodoList([...todoList,input])
        }
        setInput({title:"",desc:""})
      }} >
  <div class="mb-3">
   
    <input type="text" value={input.title} onChange={(e)=>setInput({...input,title:e.target.value})} class="form-control" placeholder='Title'/>
  </div>
  <div class="mb-3">

    <textarea  class="form-control" placeholder='Description' value={input.desc} onChange={(e)=>setInput({...input,desc:e.target.value})} ></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>





      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    {todoList.map((item,index)=>{

    const sno = index+1
    return (
    <tr>
      <th scope="row">{sno}</th>
      <td>{item.title}</td>
      <td>{item.desc}</td>
      <td >
        <div className='d-flex '>
            <button className='btn btn-danger' onClick={()=>deleteSpecificTodo(item)}>Delete</button>
            &nbsp;
            <button className='btn btn-primary ' onClick={()=>{setEdit(index); setInput(item) }} >Edit</button>
        </div>
      </td>
    </tr>
 )} )}

    {todoList.length == 0 &&
        <tr>
            <td colSpan={4}>
                No Record Found
            </td>
        </tr>
    }
  </tbody>
</table>
   
    </div>
   
    </>
  )
}

export default Todo