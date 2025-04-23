import React from 'react'
import './Footer.css'
import logo_2 from '../../assets/logo_2.svg'
import follow_txt from '../../assets/follow_txt.svg'
import insta_in from '../../assets/insta_in.svg'
import era_det from '../../assets/era_details.svg'
import priv_det from '../../assets/privacy_txt.svg'
import mad_with from '../../assets/Made_with_txt.svg'
import heart_img from '../../assets/heart_img.svg'



function Footer() {
  return (
    <div>
      <div className="logo_cont">
        <img className='logo_2' src={logo_2} alt="" />
      </div>

      <div className="fol_cont">
        <img src={follow_txt} alt="" />
      </div>

      <div className="insta_cont">
        <a
          href="https://www.instagram.com/paaltucommunity/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta_in} alt="Instagram" />
        </a>
      </div>


      <div className="era_det">
        <img src={era_det} alt="" />
      </div>

      <div className="privacy_cont">
        <img src={priv_det} alt="" />
      </div>

      <img className="mad_with" src={mad_with} alt="" />

      <div className="hrt_img">
        <img className='heart_img' src={heart_img} alt="" />
      </div>
    </div>
  )
}

export default Footer
