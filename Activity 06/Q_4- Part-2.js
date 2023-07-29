// CardList.js
import React from 'react';
import Card from './Q_4- Part-1'; // Import the Card component

function CardList({ cards }) {
  return (
    <div>
      <h2>Card List</h2>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
}

export default CardList;
