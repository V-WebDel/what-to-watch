import type { FormEvent } from 'react';
import type { UserAuth } from '../../types/user-data';

import { useAppDispatch } from '../../hooks';
import { loginUser } from '../../store/api-action';

import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

function LogIn(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form) as Iterable<[UserAuth]>;
    const data = Object.fromEntries(formData);

    dispatch(loginUser(data));
  };

  return (
    <div className="user-page">

      <header className="page-header user-page__head">

        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form" action="#" method="post" onSubmit={handleFormSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default LogIn;
