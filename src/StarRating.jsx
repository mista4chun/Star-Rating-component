import { useState } from 'react';
import Star from './Star';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

function StarRating({
  maxRating = 5,
  color = '#FFD700',
  size = '24',
  messages = [],
  defaultRating = 0,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(newRating) {
    setRating(newRating);
    setTempRating(newRating);
  }

  const lineStyle = {
    lineHeight: '1',
    margin: '0',
    color: color,
    fontSize: `${size / 1.5}px`,
  };

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
      <p style={lineStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ''}
      </p>
    </div>
  );
}

export default StarRating;
