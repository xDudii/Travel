import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data';

function CardDetail() {
  const { url } = useParams();
  const card = data.find(card => card.url === url);
  const [currentImg, setCurrentImg] = useState(card ? card.coverImg : '');

  if (!card) {
    return <div>Card not found</div>;
  }

  let badgeText;
  if (card.sells >= 200) {
    badgeText = "BESTSELLER";
  }

  const handleThumbnailClick = (img) => {
    setCurrentImg(img);
  };

  return (
    <div className="card-detail">
      <h2>{card.title}</h2>
      <div className='card-detail-container'>
        <div className='card-detail-left'>
          <img src={`/src/assets/${currentImg}`} alt={card.title} className='cover-img'/>
          <div className='additional-imgs-container'>
            {card.additionalImgs.map((img, index) => (
              <img 
                key={index} 
                src={`/src/assets/${img}`} 
                alt={`${card.title} ${index + 1}`} 
                className='additional-imgs' 
                onClick={() => handleThumbnailClick(img)} 
              />
            ))}
          </div>
        </div>
        <div className="card-detail-right">
          <p className='short-desc'>{card.description}</p>
          <p className='long-desc'>{card.longDescription}</p>
          <div className='card-detail-specyfic'>
            <h3>Details</h3>
            <p><strong>Rating:</strong> {card.rating} stars</p>
            <p><strong>Country:</strong> {card.country}</p>
            <p><strong>Price:</strong> {card.price}$ per person</p>
            {badgeText && <div>{badgeText}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
