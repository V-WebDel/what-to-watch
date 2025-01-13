import FilmList from '../../components/filmList/filmList';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Films } from '../../types/films';

type FilmCardProps = {
  films: Films;
}

function MyList({ films }:FilmCardProps): JSX.Element {
  return (
    <div className="user-page">

      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
