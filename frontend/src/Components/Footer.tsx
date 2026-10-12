import { Link } from 'react-router';

function Footer() {
  return (
    <>
      <footer className="site-footer page-shell">
        <Link className="brand footer-brand" to="/">
          <span className="brand-mark" aria-hidden="true">
            ♞
          </span>
          <span>
            chess<span className="brand-accent">rizz</span>
          </span>
        </Link>
        <span>Made for the love of the game.</span>
        <span>
          © <span id="year"></span> Chess Rizz
        </span>
      </footer>
    </>
  );
}

export default Footer;
