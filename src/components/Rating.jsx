import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  // const feedbackMessages = {
  //   1: 'very bad',
  //   2: 'could be better',
  //   3: 'okay',
  //   4: 'good experience',
  //   5: 'excellent'
  // }
  const feedbackMessages = ['very bad', 'could be better', 'okay', 'good', 'excellent']
  return (
    <div className="rating-container">
      <h2>Rate Experience</h2>
      <div className="stars">
        {stars.map((star, index) => (
          <span
          className={`star ${ star <=(hover || rating) ? 'active' : '' }`}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
            key={star}
          >{`\u2605`}</span>
        ))}
        {
          rating > 0 && <p className="feedback">{feedbackMessages[rating -1]}</p>
        }
      </div>
    </div>
  );
};

export default Rating;
