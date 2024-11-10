import {Link} from 'react-router-dom';
import {changeGenres, getFilmsByGenres} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import FilmList from '../filmList/filmList';


function FilmsGenresList(): JSX.Element {
  const films = useAppSelector((state) => state.filmsList);
  const filmsFilter = useAppSelector((state) => state.filmsFilter);
  const dispatch = useAppDispatch();
  const genres = ['All genres'];
  const genreCurrent = useAppSelector((state) => state.genre);

  films.forEach((film) => (!(genres.includes(film.genre))) ? genres.push(film.genre) : genres);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {
          genres.map((genre, key) => {
            const keyValue = `${key}`;
            return (
              <li
                className={`catalog__genres-item ${(genreCurrent === genre) ? 'catalog__genres-item--active' : ''}`}
                key = {keyValue}
                onClick={() => {
                  dispatch(changeGenres(genre));
                  dispatch(getFilmsByGenres(genre));
                }}
              >
                <Link className="catalog__genres-link" to={'/'}>{genre}</Link>
              </li>
            );
          })
        }
      </ul>

      <FilmList films={filmsFilter} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default FilmsGenresList;
