import React from 'react'
import './Card3.css'
import ArticleFooter from '../../ArticleFooter/ArticleFooter'
import card_3_img from '../../../assets/card_2.jpg'
import ArticleHeader from '../../ArticleHeader/ArticleHeader'
import Header from '../../Header/Header'

function Card3() {
  return (
    <>
    <Header />
      <div className="card3-main">
        <p className='card3-heading'>How to befriend other peoples pets??</p>
        <img className='card3-main-image' src={card_3_img} alt="" />
        <ArticleHeader />
        <div className='card1-para'>
          <p className='card1-first-para-content'>
            Pets can be wonderful companions, but they can also be a bit shy or wary of strangers. If you want to befriend<br/> someone
            else's pet, it's important to be patient and respectful of their boundaries. Here are a few tips:
          </p>
          <ol className='card1-first-para-content'>
            <li>Ask the owner's permission. Before you try to befriend someone else's pet, it's always a good idea to ask<br/> the owner's permission first. This shows that you respect their property and their pet's feelings.</li>
            <li>Introduce yourself slowly. When you first meet the pet, don't rush in and try to pet them right away. Let them <br/>sniff your hand first and get used to your presence. If they seem relaxed, you can try petting them gently<br/> on the head or back.</li>
            <li>Be calm and quiet. Pets can be easily scared by sudden movements or loud noises. When you're around them,<br/> try to be calm and quiet. Avoid making any sudden movements or loud noises.</li>
            <li>Speak softly. Pets can also be scared by unfamiliar voices. When you're talking to them, try to speak softly<br/> and soothingly.</li>
            <li>Offer them a treat. Pets love treats! If you offer them a treat, they'll be more likely to associate you with positive<br/> experiences.</li>
            <li>Play with them. Pets love to play! If you can find a game that they enjoy, it's a great way to bond with them.</li>
            <li>Be patient. It takes time to befriend a pet. Don't get discouraged if they're not immediately friendly towards you. <br/>Just keep being patient and respectful, and they'll eventually warm up to you.</li>
          </ol>

          <p className='card1-para-heading1'>
            Here are some additional tips for befriending other people's pets:
          </p>
          <ul className='card1-first-para-content'>
            <li>Pay attention to their body language. Pets will often give you cues about how they're feeling. If they're wagging<br/> their tail and licking your hand, they're probably happy to see you. But if they're growling or showing their teeth,<br/> they're trying to tell you to back off.</li>
            <li>Be a good role model. If you want your pet to be friendly towards other people, you need to be friendly towards<br/> other people's pets. Show them that you're a safe and trustworthy person.</li>
            <li>Don't force it. If a pet doesn't want to be your friend, don't force it. Just give them some space and try again later.</li>
          </ul>

          <p className='card1-first-para-content'>With a little patience and kindness, you can befriend even the shyest pet.</p>
        </div>
         <ArticleFooter/>
      </div>

  
    </>
  )
}

export default Card3
