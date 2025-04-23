import React from 'react'
import './Card1.css'
import ArticleFooter from '../../ArticleFooter/ArticleFooter'
import ArticleHeader from '../../ArticleHeader/ArticleHeader'
import Header from '../../Header/Header'
import card_1_img from '../../../assets/card_1.jpg'

function Card1() {
  return (
    <>
      <Header />

      <div className="card1-main">
        <p className='card1-heading'>Whats trending in pet care?</p>
        <img className='card1-main-image' src={card_1_img} alt="" />
        <ArticleHeader />

        <div className="card1-para">
          <p className='card1-para-heading1'>The pet care industry is a booming business, with sales expected to<br /> reach $150 billion by 2025.
            This growth is being driven by
            a number of<br /> factors, including:</p>
          <ul className='card1-first-para-content'>
            <li>The increasing humanization of pets: Pet owners are increasingly treating their pets like family members,<br /> and they are willing
              to spend more money on their care.</li>
            <li>The growing popularity of pet-friendly businesses and services: More and more businesses are becoming <br />pet-friendly, and this
              is making it easier for pet owners to live their lives with their furry friends.</li>
            <li>The rising demand for pet-specific products and services: There is a growing demand for products and<br /> services that are
              specifically designed for pets. This includes everything from food and treats to toys <br />and grooming supplies.</li>
          </ul>

          <p className='card1-para-heading2'>Here are some of the top trends in the pet care industry:</p>
          <ul className='card1-first-para-content'>
            <li>Pet insurance: Pet insurance is becoming increasingly popular as pet owners look for ways to protect their<br /> financial
              investment in their pets.</li>
            <li>Telehealth for pets: Telehealth is becoming increasingly common in the pet care industry, as it allows pet owners<br /> to get
              veterinary care for their pets without having to bring them to the vet's office.</li>
            <li>CBD for pets: CBD is a natural compound that has been shown to have a number of health benefits for pets,<br /> including
              reducing anxiety, inflammation, and pain.</li>
            <li>Plant-based pet food: There is a growing demand for plant-based pet food, as pet owners look for healthier options<br /> for
              their furry friends.</li>
            <li>Subscription services for pets: Subscription services are becoming increasingly popular in the pet care industry,<br /> as they
              make it easy for pet owners to get the supplies they need on a regular basis.</li>
          </ul>

          <p className='card1-second-para-content'>These are just a few of the top trends in the pet care industry. As the industry
            continues to grow, we can expect<br />to see even
            more innovative and exciting products and services being developed.</p>
          <p className='card1-second-para-content'>Here are some additional trends that are expected to impact the pet care industry in
            the coming years.</p>
          <ul className='card1-second-para-content'>
            <li>The rise of artificial intelligence (AI): AI is being used in a variety of ways in the pet care industry, from developing<br />
             new diagnostic tools to creating personalized training plans for pets.</li>
          </ul>

        </div>
        <ArticleFooter/>
      </div>


    </>
  )
}

export default Card1
