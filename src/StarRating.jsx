import { useState } from 'react';
import Star from './Star';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const lineStyle = {
  lineHeight: '1',
  margin: '0',
};

function StarRating({ maxRating = 5, color = '#FFD700', size= '24' }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(newRating) {
    setRating(newRating);
    setTempRating(newRating);
  }

  return (
    <div style={containerStyle}>
      <span>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index}
            onRate={() => handleRating(index + 1)}
            full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
            onMouseEnter={() => setTempRating(index + 1)}
            onMouseLeave={() => setTempRating(rating)}
            color={color}
            size={size}
          />
        ))}
      </span>
      <p style={lineStyle}>{tempRating || rating || ''}</p>
    </div>
  );
}

export default StarRating;
