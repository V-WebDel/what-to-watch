import { Link } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

const Header = () => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);

  return (
    <header className="page-header film-card__head">
      <Logo/>
      <ul className="user-block">
        {authorizationStatus === AuthorizationStatus.Auth && (
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />{user}
            </div>
          </li>
        )}
        <li className="user-block__item">
          <Link className="user-block__link" to={AppRoute.Login}>{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
