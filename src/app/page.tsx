



import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import A_Home from "@/components/Home/home";
import About from "@/components/About/about";
import Contact from "@/components/Contact/Contact";
import Service from "@/components/Services/Services";



export default function Home() {
  return (
    <>
    <div> 

     
      <Navbar/>
      <A_Home/>
      <About/>
 
      <Service/>
      <Contact/>
    </div>
  
   
    
    </>
  )
}
