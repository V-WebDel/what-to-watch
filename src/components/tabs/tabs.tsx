import { useState } from 'react';
import Overview from '../tab/overview';
import Details from '../tab/details';
import Reviews from '../tab/reviews';
import { Film } from '../../types/films';

type TabsProps = {
  film: Film;
}

function Tabs({ film }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview film={film} />;
      case 'Details':
        return <Details film={film} />;
      case 'Reviews':
        return <Reviews filmId={film.id}/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === 'Overview' ? 'film-nav__item--active' : ''}`}>
            <button onClick={() => setActiveTab('Overview')} className="film-nav__link">Overview</button>
          </li>
          <li className={`film-nav__item ${activeTab === 'Details' ? 'film-nav__item--active' : ''}`}>
            <button onClick={() => setActiveTab('Details')} className="film-nav__link">Details</button>
          </li>
          <li className={`film-nav__item ${activeTab === 'Reviews' ? 'film-nav__item--active' : ''}`}>
            <button onClick={() => setActiveTab('Reviews')} className="film-nav__link">Reviews</button>
          </li>
        </ul>
      </nav>
      {renderTabContent()}
    </div>
  );
}

export default Tabs;
