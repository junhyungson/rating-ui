import { useState } from "react";
import Star from "./Star";

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
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={setHover}
          />
        ))}
        {rating > 0 && (
          <p className="feedback">{feedbackMessages[rating - 1]}</p>
        )}
      </div>
    </div>
  );
};

export default Rating;
