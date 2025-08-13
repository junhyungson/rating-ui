import { useState } from "react";
import Modal from "./Modal";
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
  const [submitted, setSubmitted] = useState(false);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const handleSubmit = () => {
    if (rating > 0) {
      // only set when there is a rating then show modal
      setSubmitted(true);
    }
  };
  const closeModal = () => {
    setSubmitted(false);
    setRating(0); // reset rating
  };

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
      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button>
      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};

export default Rating;
