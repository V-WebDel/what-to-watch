import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type FilmTopProps = {
  name: string;
  poster: string;
  genre: string;
  year: number;
}

function FilmTop({ name, poster, genre, year }:FilmTopProps): JSX.Element {
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={poster} alt={name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{year}</span>
          </p>

          <div className="film-card__buttons">
            <Link className="btn btn--play film-card__button" to={AppRoute.Player} type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </Link>
            <Link className="btn btn--list film-card__button" to={AppRoute.MyList} type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmTop;
