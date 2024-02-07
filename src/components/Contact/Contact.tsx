"use client"

import { useState } from "react";

const Contact = () => {
 
  const [formData, setFormData] = useState({name: "",email: "",Address: "",message: ""});

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
 
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message},Address: ${formData.Address}`
    );
};

  return (
  
      <>
      <section id='contact'>
          <h2 className="heading-contact"> Contact</h2>


          <form onSubmit={handleSubmit} method="post" className="contact-form">

          <div className="c-from-1">          
      <label htmlFor="name" className="c-labels">Name:</label>
      <input className="c-data-blk" type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
         </div>

          <div className="c-from-1">
      <label htmlFor="email" className="c-labels">Email:</label>
      <input className="c-data-blk" type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
           </div>
     
           <div className="c-from-2">
      <label htmlFor="message" className="c-labels">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
           </div>
        
        
           <div className="c-from-2">
      <label htmlFor="c-Address" className="c-labels">Address:</label>
      <textarea id="Address" name="Address" value={formData.Address} onChange={handleChange}/>
            </div>

          <div className="c-submit-button">
      <button type="submit">Submit</button>
            </div>
    </form>
           
      </section>
      </>
  
  )
}

export default Contact


/*The useState hook defines a state object named formData that contains three properties: name, email, and message, each initialized to an empty string.

The handleChange function is called whenever a user types in one of the form fields. It extracts the name and value of the form field that has changed using the event.target object and then updates the formData state variable using the setFormData function.

The setFormData function uses the spread operator (...) to copy the previous formData object. Then it updates the value of the changed form field by setting its value prop with the new value. */