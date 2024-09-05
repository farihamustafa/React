import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Guestlayout(props) {
    const {children} = props;
  return (
    <div>
        <Navbar/>
        {/* <Navbar title="Project"/> */}
        {children}
        <Footer/>
      
    </div>
  )
}

export default Guestlayout
