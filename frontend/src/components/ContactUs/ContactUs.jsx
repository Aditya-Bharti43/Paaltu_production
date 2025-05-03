import React from 'react'
import { useState } from 'react'
import './ContactUs.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Walkingdog from '../WalkingDog/Walkingdog'
import location_logo from '../../assets/location-2950.svg'
import phone_icon from '../../assets/phone-519.svg'
import mail_icon from '../../assets/mail-5886.svg'
import axios from 'axios'

function ContactUs() {

  const [formData, setFormData] = useState({
    username: '',
    phone_no: '',
    email: '',
    message: ''
  });

  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async () => {
    const {username,phone_no,email,message}=formData

    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for(let i=0;i<username.length;i++)
    {
      if((username[i]>='a' && username[i]<='z') || (username[i]>='A' && username[i]<='Z'))
      {
        continue
      }
      else{
        alert('Only characters are allowed in username')
        return
      }
    }

      for(let i=0;i<phone_no.length;i++)
      {
        if(!(phone_no[i]>=1 && phone_no[i]<=10))
        {
          alert('Invalid phone number')
        }
      }

      // email validation 

    if(!emailRegex.test(email))
    {
      alert('Invalid email address')
      return
    }

    try {
      console.log(formData);
      
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/contactUs/contact`, formData);
      setResponseMsg("We'll call you back soon!");
    } catch (err) {
      console.error(err);
      setResponseMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <div>


      <Header/>

      <div className="contact-us-main">
        <div className='contact-and-cat'>
          <div className='contact-heading'>
            <span>contact</span> us
            <div className="divider-contact"></div>
            <div className="contact-content">
              we'll assist you in your pet-parenting journey. We 
              <p className='contact-extended-para'>are just one call away</p> 
            </div>
          </div>
          <div className='contact-cat'>
            <img className='contact-cat-1' src="https://www.mypaaltu.com/wp-content/uploads/2022/11/18.png" alt="" />
          </div>
        </div>
        <div className='contact-credentials'>
          <div className='contact-location'>
            <img className="location-logo"src={location_logo} alt="" />
            <p>Gurugram,Haryana</p>
          </div>
          <div className='contact-phone'>
            <img className='phone-logo' src={phone_icon} alt="" />
            <p>+91 7528000776</p>
          </div>
          <div className='contact-mail'>
            <img className='mail-logo' src={mail_icon} alt="" />
            <p>support@mypaaltu.com</p>
          </div>
        </div>
        <div className='join-and-user-credentials'>
          <div className='contact-join-us-content'>
            <p className='contact-para-1'>Join us</p>
            <p className='contact-para-2'> <span>We're here for</span> <br/> <span>anything</span> You might<br/> need </p>
            <p className='contact-para-3'>
            Feel free to reach out if you have any<br/> questions regarding the services we provide,<br/> or if you need a counselling in this
            regard or<br/> even if you have any pet related query. Drop <br/> a message, we will make sure to<br/> get back to you.
            </p>
          </div>
          <div className='contact-user-box'>
            <div className='contact-name-field'>
              <input name='username' type="text" placeholder='Name' onChange={handleChange} value={formData.username} />
            </div>
            <div className='contact-phone-field'>
            <input type="text" name='phone_no' placeholder='Phone' onChange={handleChange} value={formData.phone_no} />
            </div>
            <div className='contact-email-field'>
            <input type="text" name='email' placeholder='Email' onChange={handleChange} value={formData.email} />
            </div>
            <div className='contact-message-field'>
            <input type="text" name='message' placeholder='Message' onChange={handleChange} value={formData.message} />
            </div>
            <div className="contact-button-field">
              <button className='contact-call-button' onClick={handleSubmit}> <p>Call Me Back</p></button>
            </div>
            {responseMsg && <p>{responseMsg}</p>}
          </div>
        </div>
      </div>

      <Footer/>
   
      
    </div>
  )
}

export default ContactUs
