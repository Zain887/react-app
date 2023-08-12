import React, { useState, useEffect } from 'react';
import Card from '../components/Card'
import CardData from '../components/data'
const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center md:h-auto">
        {/* js data */}
        {CardData.map((data, index) => (
          <Card key={index} title={data.title} content={data.content} />
        ))} 
      </div>
    </>
  )
}

export default Home