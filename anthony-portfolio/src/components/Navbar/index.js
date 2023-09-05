import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the specific FontAwesome icons you need
import Logo from '../../assets/images/Anthony-logos_transparent.png';

const Navbar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={Logo} alt="Logo" />
    </Link>
    <nav>
      <NavLink exact={true} activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact={true} activeClassName="active" to="/about">
        <FontAwesomeIcon icon={faInfoCircle} color="#4d4d4e" />
      </NavLink>
      <NavLink exact={true} activeClassName="active" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
  </div>
);

export default Navbar;