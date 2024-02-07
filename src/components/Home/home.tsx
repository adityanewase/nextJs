import React from 'react'
import Link from 'next/link'
import HomeBackground from "@/Assets/Background/expressive-young-woman-posing-studio.jpg"

const Home = () => {
  return (
    <section id='home'>
       

      

        <div className='home-all-data'>
        
          <div className='home-data'>
            <p className='h-para-1'>We are here to make you best</p>


            <h2 className='h-heading'><span>Web Design </span>Examples & <br/>Best Practices</h2>
              <p className='h-para-2'>website Header is the element located at the top of a web page. This is the first place users see when accessing the website. 
              Therefore, you should design the header carefully and clearly to make a good impression and easily convey the message you want to the user.</p>

          
            </div>

            <div className='home-data-2'>

                <button className='h-button-contact'>Contact Us</button>

            </div>
        </div>
    </section>
  )
}

export default Home
