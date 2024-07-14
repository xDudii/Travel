import React, { useState } from 'react';
import Card from './Card'; 
import { data } from '../data'; 


const uniqueCountries = Array.from(new Set(data.map(item => item.country)));
 
const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(''); 

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value); 
  };

  let filteredCards;

  if (selectedCountry) {
    filteredCards = data.filter((item) => item.country === selectedCountry);
  } else {
    filteredCards = data;
  }
  

  return (
    <div>
     
     <div className='country-selector'>
        <h2>Select Country</h2>
        <select onChange={handleCountryChange}>
            <option value="">All countries</option>
            
            {uniqueCountries.map(country => (
                <option key={country} value={country}>
                    {country}
                </option>
            ))}

        </select>
      </div>

      
      <div className="cards-container">
        {filteredCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CountrySelector;
