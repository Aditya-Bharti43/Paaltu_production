import React from 'react'
import './Card5.css'
import ArticleFooter from '../../ArticleFooter/ArticleFooter'
import card_5_img from '../../../assets/card_3.jpg'
import ArticleHeader from '../../ArticleHeader/ArticleHeader'
import Header from '../../Header/Header'
function Card5() {
  return (
    <>
    <Header />
      <div className="card5-main">
        <p className='card5-heading'>Why you should get a pet?</p>
        <img className='card5-main-image' src={card_5_img} alt="" />
        <ArticleHeader />

        <div className="card5-para">
          <p className='card1-first-para-content'>
            Pets can provide companionship, love, and support. They can also help to reduce stress, improve cardiovascular<br/> health, and boost
            immunity. Some studies have even shown that pets can help to reduce the risk of developing <br/>certain chronic diseases, such as
            heart disease, stroke, and diabetes.
          </p>
          <p className='card1-para-heading1'>Here are some of the specific benefits of getting a pet:</p>
          <ul className='card1-first-para-content'>
            <li>Reduce stress: Pets can help to reduce stress by providing companionship and unconditional love. They can <br/>also help to distract you from your worries and give you a reason to get out and exercise.</li>
            <li>Improve cardiovascular health: Studies have shown that people who own pets tend to have lower blood pressure<br/> and heart rates than those who do not own pets. Pets can also help to lower cholesterol levels and reduce<br/> the risk of developing heart disease.</li>
            <li>Boost immunity: Pets can help to boost immunity by exposing you to germs and bacteria. This can help to train <br/>your immune system to fight off infection.</li>
            <li>Reduce loneliness: Pets can help to reduce loneliness by providing companionship and social interaction. They can<br/> also help you to meet new people and make friends.</li>
            <li>Improve mental health: Pets can help to improve mental health by providing a sense of purpose and responsibility.<br/> They can also help to reduce anxiety and depression.</li>
            <li>Help children develop responsibility: Pets can help children develop responsibility by teaching them how to care for<br/> another living being. They can also teach children about empathy and compassion.</li>
            <li>Increase physical activity: Pets can help you to get more exercise by requiring you to take them for walks, play<br/> fetch, or go for runs.</li>
            <li>Encourage exploration: Pets can encourage you to explore new places by wanting to go for walks in different<br/> neighborhoods or parks.</li>
            <li>Provide a sense of security: Pets can provide a sense of security by being there for you when you are feeling <br/>scared or vulnerable.</li>
          </ul>

          <p className='card1-para-heading1'>
            If you are considering getting a pet, there are a few things you <br/>should keep in mind:
          </p>
          <ul className='card1-first-para-content'>
            <li>Do your research: There are many different types of pets, each with its own unique needs. It is important<br/> to do your research and choose a pet that is right for you and your lifestyle.</li>
            <li>Be prepared for the financial responsibility: Pets can be expensive. You will need to factor in the cost of food,<br/> vet care, toys, and other supplies.</li>
            <li>Make sure you have the time to commit: Pets require care and attention. You will need to be able to provide them<br/> with food, water, exercise, and companionship on a regular basis.</li>
          </ul>

          <p className='card1-first-para-content'>
            If you are willing to put in the time and effort, getting a pet can be a rewarding experience. Pets can provide <br/>companionship,
            love, and support, and they can also help to improve your physical and mental health.
          </p>
        </div>
        <ArticleFooter/>
      </div>
    </>
  )
}

export default Card5
