import Logo from '../../components/logo/logo';
import FormReview from '../../components/formReview/formReview';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

type AddReviewProps = {
  name: string;
  poster: string;
}

function AddReview({ name, poster }:AddReviewProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={poster} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href='/'>Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link className="user-block__link" to="/logIn">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={poster} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormReview/>
      </div>
    </section>
  );
}

export default AddReview;
