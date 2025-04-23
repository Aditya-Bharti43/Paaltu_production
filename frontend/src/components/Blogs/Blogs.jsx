import React from 'react'
import Header from '../Header/Header'
import './Blogs.css'
import Walkingdog from '../WalkingDog/Walkingdog'
import Sidebar from '../Sidebar/Sidebar' // Import the Sidebar
import card_1 from '../../assets/card_1.jpg'
import card_2 from '../../assets/card_2.jpg'
import card_3 from '../../assets/card_3.jpg'
import card_4 from '../../assets/card_4.jpg'
import card_5 from '../../assets/card_5.jpg'
import card_6 from '../../assets/card_6.jpg'
import blog_dog from '../../assets/new_dog_blog.png'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
   <>
   <Header/>
   {/* <Sidebar/> Add the Sidebar component */}
   
    <div className='blog-main'>
    <div className='blog-and-cat'>
      <div className='blog-heading'>
        <p className='blog-span-para'>our blogs, more like a </p>
        <p className='blog-down-para'>help book</p>
        <div className='blog-divider'></div>
        <p className='bpara-1'>Your go-to screen for your little ones</p>
      </div>
    
    </div>
    <div className="blog-cards-and-footer-content-combined">
    <div className='blog-cards'>
      <div className='blog-first-col'>
        <div className='blog-whats-tending'>
          <img src={card_1} alt="Blog card 1" />
          <div className='blog-card1-content'>
            <p>[wpbread]</p>
            <p className='blog-date'>07/04/2023</p>
          </div>
          <div className='blog-whats-trending-content'>
            <Link to={`/blogs/card1`} style={{textDecoration:"none"}}> 
              <p className='blog-whats-trending-content-para'>Whats trending in pet care?</p>
            </Link>
            <p className='blog-by-admin'>by Admin</p>
          </div>
        </div>
        <div className='blog-why-socialisation'>
          <img src={card_4} alt="Blog card 4" />
          <div className='blog-card2-content'>
            <p>[wpbread]</p>
            <p className='blog-date'>07/04/2023</p>
          </div>
          <div className='blog-why-socialisation-content'>
            <Link to={`/blogs/card2`} style={{textDecoration:"none"}}> 
              <p className='blog-why-socialisation-content-para'>Why Socialisation is Important for Pets?</p>
            </Link>
            <p className='blog-by-admin'>by Admin</p>
          </div>
        </div>
      </div>
      <div className='blog-second-col'>
        <div className='blog-bestfriend-other'>
          <img src={card_2} alt="Blog card 2" />
          <div className='blog-card3-content'>
            <p>[wpbread]</p>
            <p className='blog-date'>07/04/2023</p>
          </div>
          <div className='blog-bestfriend-other-content'>
            <Link to={`/blogs/card3`} style={{textDecoration:"none"}}>
              <p className='blog-bestfriend-other-content-para'>How to befriend other<br/> peoples pets?</p>
            </Link>
            <p className='blog-by-admin'>by Admin</p>
          </div>
        </div>
        <div className='blog-hire-pet'>
          <img src={card_5} alt="Blog card 5" />
          <div className='blog-card4-content'>
            <p>[wpbread]</p>
            <p className='blog-date'>07/04/2023</p>
          </div>
          <div className='blog-hire-pet-content'>
            <Link to={`/blogs/card4`} style={{textDecoration:"none"}}> 
              <p className='blog-hire-pet-content-para'>Why should you hire a pet<br/> boarder or a sitter for your pet?</p>
            </Link>
            <p className='blog-by-admin'>by Admin</p>
          </div>
        </div>
      </div>
      
      <div className='blog-third-col'>
        <div className='blog-shoud-get-pet'>
          <img src={card_3} alt="Blog card 3" />
          <div className='blog-card5-content'>
            <p>[wpbread]</p>
            <p className='blog-date'>07/04/2023</p>
          </div>
          <div className='blog-shoud-get-pet-content'>
            <Link to={`/blogs/card5`} style={{textDecoration:"none"}}> 
              <p className='blog-shoud-get-pet-content-para'>Why should you get a pet?</p>
            </Link>
            <p className='blog-by-admin'>by Admin</p>
          </div>
        </div>
        <div className='blog-pet-grooming'>
          <img src={card_6} alt="Blog card 6" />
          <div className='blog-card6-content'>
            <p>[wpbread]</p>
            <p className='blog-date'>07/04/2023</p>
          </div>
          <div className='blog-pet-grooming-content'>
            <Link to={`/blogs/card6`} style={{textDecoration:"none"}}> 
              <p className='blog-pet-grooming-content-para'>Pet grooming- what why and how?</p>
            </Link>
            <p className='blog-by-admin'>by Admin</p>
          </div>
        </div>
      </div>
    </div>

    <div className='blog-footer-and-dog'>
      <div className='blog-dont-miss-out'>
        <p className='blog-para-1'><span>Don't miss</span> out!</p>
        <p className='blog-para-2'>Sign up for our newsletter to not miss any useful info<br/> for your pets</p>
        <div className='blog-email-and-send-button'>
          <div className='blog-email'>
            <input type="text" placeholder='Email' />
          </div>
          <div className='blog-button'>
            <button>Send</button>
          </div>
        </div>
      </div>

      <div className='blog-dog-image'>
        <img src={blog_dog} alt="Dog" />
      </div>
    </div>
    </div>
    </div>
    
    <Footer/>
   
   </>
  )
}

export default Blogs