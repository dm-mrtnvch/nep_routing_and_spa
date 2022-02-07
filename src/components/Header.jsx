import {Link} from 'react-router-dom';
import {Contacts} from './pages/Contacts';

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        {/*<a href="/" className="brand-logo">*/}
        {/*  React Shop*/}
        {/*</a>*/}
        <Link to="/">
          React shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
              <Link to="/contact">contact</Link>
          </li>
          <li>
              <Link to="/about"> about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export {Header};
