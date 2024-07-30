import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <div className="page-content">
        <header className="page-header user-page__head">
          <Logo/>
        </header>

        <section className="not-found">
          <h1 className="not-found__title">404 Not Found</h1>
          <a className='not-found__link' href="/">Go to the home page</a>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
