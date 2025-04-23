import React from 'react'
import './Card4.css'
import ArticleFooter from '../../ArticleFooter/ArticleFooter'
import card_4_img from '../../../assets/card_5.jpg'
import ArticleHeader from '../../ArticleHeader/ArticleHeader'
import Header from '../../Header/Header'
function Card4() {
  return (
    <>
    <Header />
      <div className="card4-main">
        <p className='card4-heading'>Why should you hire a pet boarder or a sitter for your pet?</p>
        <img className='card4-main-image' src={card_4_img} alt="" />
        <ArticleHeader />
        <div className="card4-para">
          <p className='card1-first-para-content'>Pet boarding and sitting are services that provide care for pets when their owners are 
            unable to do so. This can <br/>be for a variety of reasons, such as work travel, vacation, or medical emergencies.</p>
          <p className='card1-para-heading1'>
            There are many reasons why pet boarding and sitting is necessary today.<br/> Here are a few of the most common ones:
          </p>
          <ul className='card1-first-para-content'>
            <li>More people own pets than ever before. According to the American Pet Products Association, there are over<br/> 70 million dogs and 63 million cats in the United States. This means that there are more pets than ever before<br/> that need care when their owners are away.</li>
            <li>People are more likely to travel for work or pleasure. In the past, people may have been less likely to travel <br/>if they had pets. However, today, more people are willing to travel knowing that their pets can be cared for<br/> by a professional.</li>
            <li>Pets are living longer. The average lifespan of a dog is now 10-13 years, and the average lifespan of a cat <br/>is 15-20 years. This means that pet owners are more likely to need pet care services as their pets age.</li>
            <li>Pets can have special needs. Some pets have special needs that require more specialized care. For example, <br/>
            some pets may need to be walked multiple times a day, or they may need to take medication.<br/> Pet boarding and sitting services can provide this specialized care.</li>
          </ul>

          <p className='card1-first-para-content'>Pet boarding and sitting can provide peace of mind for pet owners knowing that their
            furry friends are in good hands<br/> while they are away. It can also help to reduce stress and anxiety for both pets and
            owners.</p>
          <p className='card1-para-heading1'>If you are considering pet boarding or sitting services, there are a few<br/> things you
            should keep in mind:</p>
          <ul className='card1-first-para-content'>
            <li>Do your research. There are many different pet boarding and sitting services available. It is important to do your<br/> research and find a service that is reputable and that provides the level of care that you are looking for.</li>
            <li>Ask questions. Once you have found a few potential services, be sure to ask questions about their policies and <br/>procedures. This includes things like hours of operation, rates, and what services are included.</li>
            <li>Visit the facility. If possible, visit the facility in person before you make a decision. This will give you a chance to see <br/>the facility and meet the staff.</li>
            <li>Trust your gut. If you have a good feeling about a particular service, go with it. Your pet’s happiness and well-being<br/> are important, so it is important to choose a service that you feel comfortable with.</li>
          </ul>

          <p className='card1-first-para-content'>Pet boarding and sitting can be a great way to ensure that your pet is well-cared
            for when you are unable to do so.<br/> By doing your research and choosing a reputable service, you can give your pet
            the peace of mind they deserve.</p>
        </div>
        <ArticleFooter/>
      </div>
    </>
  )
}

export default Card4
