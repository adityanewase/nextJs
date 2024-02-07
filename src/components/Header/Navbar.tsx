"use client";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {
  const [showMenu ,setShowMenu] = useState(false);
  
  return (
   <>
   <section id="header">
   <h1 className="nav-logo">SigmaTech</h1>

    <nav className="nav-header">


      <ul className="nav-all-menu">

        <li className="Nav-menu"><a href="#home" >Home</a></li>
        <li className="Nav-menu"><a href="#about" >About</a></li>
        
        <li className="Nav-menu"><a href="#service" >Services</a></li>
        <li className="Nav-menu"><a href="#contact" >Contact</a></li>
         
      </ul>
      
 
  

      <div className='Media-menu-bar' style={{display:showMenu? 'flex': 'none'}}>
      <ul className="nav-all-menu-r">

        <li className="Nav-menu-r" onClick={ ()=>setShowMenu(false)}><a href="#home" >Home</a ></li>
        <li className="Nav-menu-r" onClick={ ()=>setShowMenu(false)}><a href="#about" >About</a></li>
        
        <li className="Nav-menu-r" onClick={ ()=>setShowMenu(false)}><a href="#service" >Services</a></li>
        <li className="Nav-menu-r" onClick={ ()=>setShowMenu(false)}><a href="#contact" >Contact</a></li>
         
      </ul>
      </div>
      
      <div className='n-slider-menu'><MenuIcon onClick={ ()=>setShowMenu(!showMenu)}/></div>

      
    </nav>
   

   </section>
   </>
  )
}

export default Navbar
