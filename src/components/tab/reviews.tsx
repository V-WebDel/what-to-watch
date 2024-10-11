import { reviews } from '../../mocks/reviews';

type ReviewsProps = {
  filmId: number;
};

function Reviews({ filmId }: ReviewsProps): JSX.Element {

  const filmReviews = reviews.filter((review) => review.filmId === filmId);

  if (filmReviews.length === 0) {
    return <p>No reviews available for this film.</p>;
  }
  return (
    <div className="film-card__reviews film-card__row">
      {filmReviews.map((review) => (
        <div className="film-card__reviews-col" key={review.id}>
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={review.date}>{new Date(review.date).toLocaleDateString()}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
