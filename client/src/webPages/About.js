import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import cardData from '../components/data.json';

const About = () => {
  const [cardContent, setCardContent] = useState([]);

  useEffect(() => {
    // Using imported JSON data
    setCardContent(cardData);
  }, []);
  return (
    <div className="flex justify-center items-center md:h-auto">
      {cardContent.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default About;
