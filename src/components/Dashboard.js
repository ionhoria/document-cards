import React from 'react'
import Card from './Card'
import '../styles/style.css'

const Dashboard = ({ cards }) => (
  <div className='container'>
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/icon?family=Material+Icons'
    />
    <div className='title'>
      Document Cards
    </div>
    <div className='grid'>
      {cards.map(card => <Card key={card.id} card={card} />)}
    </div>
  </div>
)

export default Dashboard
