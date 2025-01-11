import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import FilmCard from '../../components/filmCard/filmCard';
import Spinner from '../spinner/spinner';
import { Films } from '../../types/films';

type FilmListProps = {
  films: Films;
}

function FilmList({ films }: FilmListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const isFilmsLoading = useAppSelector((state) => state.isFilmsLoading);

  const handleMouseEnter = (id: number) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  if (isFilmsLoading) {
    return <Spinner />;
  }


  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          {...film}
          isActive={activeCard === film.id}
          onMouseEnter={() => handleMouseEnter(film.id)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}


export default FilmList;
