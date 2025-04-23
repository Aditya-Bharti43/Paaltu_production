import React from 'react'
import Header from '../Header/Header'
import './AboutUs.css'
import Footer from '../Footer/Footer'
import Walkingdog from '../WalkingDog/Walkingdog'
import piku_img from '../../assets/pikku_1.jpg'
function AboutUs() {
  return (
    <div>
      <Header/>
      <div className="about-main">
        <div className='about-us'>
         <span className='pp-first-tx'>about</span>  us
         
          <div className="divider"></div>
          <div className="second-txt">
            The why, what and how of Paaltu.
          </div>
          </div>
        <div className='bat-img'>
          <img className='bat-img_1' src="https://www.mypaaltu.com/wp-content/uploads/2022/11/3.png" alt="" />
        </div>
      </div>

      <div className="why-paaltu">
        <div className="why-content">
         <span className='why-txt'>why</span>paaltu

        </div >
        <div className="main-content-piku">
          <p>
        Piku, managed to send us all into extreme panic when he got himself dognapped. (you read it right) 
        After a few hours of heartsickness, crying,lamenting and running around begging to check CCTVs of 
        nearby places to find even one clue but most in vain, we <span className='manage-txt'>managed to find him</span>, its very rare but we got lucky.
         Later we figured it was because we were arranging our place for a party next day and he felt the lack of attention. 
         He wandered off by himself trying to find something adventurous. That incident was the onset of our discussions about
         solid pet care.
         </p>
        </div>
       
      </div>

      <div className="piku-story">
        <img className="piku-img" src="https://www.mypaaltu.com/wp-content/uploads/2023/06/Piku-tha-1st-Dog.jpg" alt="" />
        <div className="pik-content">
        <span className='piku-name'>Piku</span> is the first dog of the Paaltu community, our very own sophisticated dumbo. Taking his care, we realised there is a lot pet
         parents need to do. Pet's humans obviously play the most important role in the development and happiness of their pet.
          But we humans have thousands of things to cater to all the time. The upside is that pet's humans can seek assistance and make 
          this process more pleasant for their pets. Paaltu is an initiative towards the same. We provide assistance to improve how pet
           parenting can be done.
            <br/>
            <p>
          If we had a carent to give Piku his deserved attention and a GPS tracker, we would not have landed up in such a situation.
           The importance of bringing together a community of pets, pet's humans and all the pet lovers is that it caters to most of
            the problems these speechless living beings and their humans may have.
            </p>
        </div>
      </div>

      <div className="what-and-how">
        <div className='piku-title-content'>
          <div className='what-content'>
            <span className='what-txt'>what and </span>how?
          </div>
          <div className='what-how-para'>
            <p>
            Our vision is to form a community that is inclusive of all the pets, all the humans who have pets, all the humans getting one
             in the near future and all the rest who just love pets but don't have any. Paaltu is a haven for pets, their way of living a
              more adventurous, loving and attentive life. Paaltu is an assistant to all the pet parents, at their service 24/7 for anything
               they might need. Paaltu is one stop manual for all the future pet parents out there, to get an idea about how beautiful this 
               journey is. <span className='piku-underline-txt'>Paaltu is an “anywhere door” for all the pet lovers who couldn't/can't have pets but can spend little bits of time
                with other people's pet and take their care like their own.</span>  <br/>

              The idea, the motivation and the working behind Paaltu has been researched to a very very vast extent to bring forward a 
              system that is indeed practical, foolproof and unique. Our system is super user friendly and would introduce you to new
               perspectives towards pet care. We believe that every pet and pet lover out there deserves to experience this unconditional 
               love, care and belongingness. Thank you for joining this community and this journey. You deserve and your pet deserves
            </p>
          </div>
        </div>
        <div className='pik-img-2'>
          <img className='pikku-image-2' src={piku_img} alt="" />
        </div>
      </div>

      <Footer/>
     

    </div>
  )
}

export default AboutUs
