import {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import { Film } from '../../types/films';
import VideoPlayer from '../videoPlayer/videoPlayer';

type FilmCardProps = Film & {
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function FilmCard({id, name, poster, previewVideoLink, isActive, onMouseEnter, onMouseLeave}:FilmCardProps): JSX.Element {
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    hoverTimerRef.current = setTimeout(() => {
      setIsHovered(true);
      onMouseEnter();
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    setIsHovered(false); // Сбросить состояние hover при уходе курсора
    onMouseLeave();
  };

  return (
    <article key={id} className={`small-film-card catalog__films-card ${isActive ? 'small-film-card--active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          poster={poster}
          src={previewVideoLink}
          isActive={isHovered}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
