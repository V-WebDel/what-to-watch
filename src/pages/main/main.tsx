import FilmsGenresList from '../../components/filmsGenresList/filmsGenresList';
import FilmTop from '../../components/filmTop/filmTop';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import { Films } from '../../types/films';

type MainProps = {
  name: string;
  poster: string;
  background: string;
  genre: string;
  year: number;
  films: Films;
}

function Main({ name, poster, background, genre, year, films }: MainProps): JSX.Element {

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={background} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <FilmTop name={name} poster={poster} genre={genre} year={year}/>

      </section>

      <div className="page-content">

        <FilmsGenresList />

        <Footer />
      </div>
    </>);
}

export default Main;
