import { useState } from "react";

const Rating = ({
  heading = "Rate your experience",
  color = "gold",
  feedbackMessages = [
    "very bad",
    "could be better",
    "okay",
    "good",
    "excellent",
  ],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star, index) => (
          <span
            // className={`star ${ star <=(hover || rating) ? 'active' : '' }`}
            className="star"
            style={{
              color: star <= (hover || rating) ? color : "#ccc",
            }}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            key={star}
          >{`\u2605`}</span>
        ))}
        {rating > 0 && (
          <p className="feedback">{feedbackMessages[rating - 1]}</p>
        )}
      </div>
    </div>
  );
};

export default Rating;
