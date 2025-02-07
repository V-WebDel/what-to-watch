import { Link, useNavigate, useParams } from 'react-router-dom';
import RelatedList from '../../components/relatedList/relatedList';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Tabs from '../../components/tabs/tabs';
import {AppRoute} from '../../const';

import { Films } from '../../types/films';

type FilmCardProps = {
  films: Films;
}

function MovePage({ films }:FilmCardProps): JSX.Element {
  const { id } = useParams<{ id: string }>(); // Извлекаем ID из параметров
  const film = films.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => navigate(AppRoute.Player)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button onClick={() => navigate(AppRoute.MyList)} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs film={film} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <RelatedList films={films} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MovePage;
