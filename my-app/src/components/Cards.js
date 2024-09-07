import React from 'react'

function Cards(props) {
    const{image , title, desc,children} = props;
  return (
    <div class="card col mx-5" style={{width:"18rem"}}>
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{desc}</p>
    {children}
    <a href="#" class="btn btn-primary">buy now</a>
  </div>
</div>
  )
}

export default Cards