import React, { useState } from 'react';

function FormReview(): JSX.Element {
  const [rating, setRating] = useState<string>('8');
  const [reviewText, setReviewText] = useState<string>('');

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };

  const handleReviewTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log({ rating, reviewText });
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((star) => (
            <React.Fragment key={star}>
              <input
                className="rating__input"
                id={`star-${star}`}
                type="radio"
                name="rating"
                value={String(star)}
                checked={rating === String(star)}
                onChange={handleRatingChange}
              />
              <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={reviewText}
          onChange={handleReviewTextChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default FormReview;
