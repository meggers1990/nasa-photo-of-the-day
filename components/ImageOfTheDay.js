import React from 'react';

const ImageOfTheDay = ({ imageUrl, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default ImageOfTheDay;
