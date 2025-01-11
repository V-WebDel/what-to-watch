import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {changeGenres, getFilmsByGenres} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import { fetchFilms } from '../../store/api-action';
import FilmList from '../filmList/filmList';
import ShowMoreButton from '../showMoreButton/showMoreButton';

function FilmsGenresList(): JSX.Element {
  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state.filmsList);
  const filmsFilter = useAppSelector((state) => state.filmsFilter);
  const genres = ['All genres'];
  const genreCurrent = useAppSelector((state) => state.genre);

  const [displayCount, setDisplayCount] = useState(8);

  films.forEach((film) => (!(genres.includes(film.genre))) ? genres.push(film.genre) : genres);


  useEffect(() => {
    if (films.length > 0) {
      dispatch(getFilmsByGenres('All genres'));
    }
  }, [dispatch, films]);

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 8);
  };

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


      <FilmList films={filmsFilter.slice(0, displayCount)} />

      {displayCount < filmsFilter.length && (
        <ShowMoreButton onClick={handleShowMore} />
      )}
    </section>
  );
}

export default FilmsGenresList;
