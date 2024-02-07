import React from 'react'
import { Icon, Menu } from '@mui/material'
import { BookOnline, BroadcastOnHome, Class, DeviceHub, Home, HomeWork, Laptop, LaptopChromebook, MenuBook } from '@mui/icons-material'


const about = () => {
  return (
   <>
   <section id='about'>
    <div className='about-area'>
      <h2 className='about-heading-1'>About us</h2>

       <h3 className='about-heading-2'> Highly Demanded Skill Enhancement Courses</h3>
       <p className='about-para-1'>The Knowledge Academy is Worlds Leading Organisation for training professionals. 
       <br></br>The Knowledge Academy provides training in 490+ locations in around 221+ countries, covering 3000 subjects with the following delivery methods:</p>

       <div className='about-blocks'>
        <div className='about-block-1'>
        <HomeWork className='about-blocks-icons'/>
          <h3 className='about-bok-heading'> Classroom Training</h3>
          <button className='about-button-eqr'>Enquiry Now</button>
        </div>

        <div className='about-block-1'>
        <LaptopChromebook className='about-blocks-icons'/>
          <h3 className='about-bok-heading'>Online Instructor-Led Training</h3>
          <button className='about-button-eqr'>Enquiry Now</button>
        </div>

       

       </div>

       <div className='about-blocks'>
        
       <div className='about-block-1'>
       <MenuBook className='about-blocks-icons'/>
          <h3 className='about-bok-heading'> Online Self-Paced Training</h3>
          <button className='about-button-eqr'>Enquiry Now</button>
        </div>

        <div className='about-block-1'>
        <BroadcastOnHome className='about-blocks-icons'/>
          <h3 className='about-bok-heading'>Onsite Training</h3>
          <button className='about-button-eqr'>Enquiry Now</button>
        </div>

        <div className='about-block-1'>
       <MenuBook className='about-blocks-icons'/>
          <h3 className='about-bok-heading'> Online Self-Paced Training</h3>
          <button className='about-button-eqr'>Enquiry Now</button>
        </div>

       </div>
       
    </div>  
   </section>
   </>
  )
}

export default about
 