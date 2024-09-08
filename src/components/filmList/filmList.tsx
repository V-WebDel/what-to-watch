import { useState } from 'react';
import FilmCard from '../../components/filmCard/filmCard';
import { Films } from '../../types/films';

type FilmListProps = {
  films: Films;
}

function FilmList({ films }: FilmListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };


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
