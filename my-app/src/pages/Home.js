import React from 'react'
import Cards from '../components/Cards'


function Home() {
  return (
    <>
      <img src='/poster.png' style={{ width: "100%", height: "400% " }} />
      <div class="conatiner p-4">
        <h1>Products</h1>
        <div className='mt-5 row w-100 justify-content-center'>
          <Cards image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" title="Card Title 1" desc="Anti hairfall shampoo">
            <p>whatever</p>
          </Cards>
          <Cards image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" title="Card Title 2" desc="Anti hairfall shampoo" />
          <Cards image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" title="Card Title 3" desc="Anti hairfall shampoo" />
          
          
        </div>
      </div>
    </>
  )
}

export default Home
