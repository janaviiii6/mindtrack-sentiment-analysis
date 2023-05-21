import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out the Various Categories!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                  <CardItem 
                  src='images/img-9.jpg'
                  text='Analyse the comments of a particular video
                  by only providing the video id'
                  label='Youtube'
                  path='/services'
                  /> 
                  <CardItem 
                  src='images/img-2.jpg'
                  text='Analyse reviews of employees from various companys
                  by only entering the name of the company'
                  label='Company'
                  path='/services'
                  />
                  <CardItem 
                  src='images/img-10.jpg'
                  text='Get the sentiments of the news in reddit on topics 
                  that you are interested in'
                  label='Reddit News'
                  path='/services'
                  />
                </ul>
                <ul className='cards__items'>
                  <CardItem 
                  src='images/img-3.jpg'
                  text='See how people feel about the premium food products
                  delivered by amazon'
                  label='Amazon Fine Food'
                  path='/services'
                  /> 
                  <CardItem 
                  src='images/img-4.jpg'
                  text='See what the people have to say about a hotel you
                  are planning to visit'
                  label='Hotel'
                  path='/services'
                  /> 
                  <CardItem 
                  src='images/img-8.jpg'
                  text='Analyse reviews left on various amazon products
                  by the customers'
                  label='Amazon Products'
                  path='/services'
                  /> 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards