




import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (


      
<section id='header' className='h-header'>
 <header>
 <h1 className='n-logo'>SigmaTech</h1>
  <nav className='n-nav-area'>

    <ul className='n-header-nav'>
  
      <li className='n-menu'><a href="#home" >Home</a></li>
      <li className='n-menu'><a href="#about">About</a></li>
      <li className='n-menu'><a href="#info" >Info</a></li>
      <li className='n-menu'><a href="#service" >Services</a></li>
      <li className='n-menu'><a href="#contact" >Contact</a></li>
      
      <li className='n-slider-menu'> <MenuIcon/></li>


      
    </ul>
  </nav>
 </header>

 

</section>
          
          
          
  )
}

export default Header
