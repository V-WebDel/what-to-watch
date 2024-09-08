import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import { Film } from '../../types/films';

type FilmCardProps = Film & {
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function FilmCard({id, name, preview, isActive, onMouseEnter, onMouseLeave}:FilmCardProps): JSX.Element {
  return (
    <article key={id} className={`small-film-card catalog__films-card ${isActive ? 'small-film-card--active' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={preview} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
