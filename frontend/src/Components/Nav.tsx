import { Link, NavLink } from 'react-router';
import './Nav.css';

function Nav() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Chess Rizz home">
          <span className="brand-mark" aria-hidden="true">
            ♞
          </span>
          <span>
            chess<span className="brand-accent">rizz</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="primaryNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="nav-links" id="primaryNav" aria-label="Main navigation">
          <NavLink className="nav-link" to="/" end>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/tournaments" end>
            Tournaments
          </NavLink>
          <NavLink className="nav-link" to="/statistics" end>
            Statistics
          </NavLink>
          <NavLink className="nav-link" to="/study" end>
            Study
          </NavLink>
          <NavLink className="login-link, have done that" to="/login" end>
            Log in <span aria-hidden="true">↗</span>
          </NavLink>
          <button
            className="theme-toggle"
            id="themeToggle"
            type="button"
            aria-label="Switch to dark mode"
          >
            <span className="theme-icon" aria-hidden="true">
              ☾
            </span>
            <span className="theme-label">Dark mode</span>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Nav;
