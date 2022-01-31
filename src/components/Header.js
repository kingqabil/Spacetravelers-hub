import { NavLink } from 'react-router-dom';
import Logo from '../images/001-planet.png';

const Header = () => (
  <header>
    {' '}
    <div>
      <img src={Logo} alt="logo" />
      <h1>Space Traveler`&apos;`s Hub</h1>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/dragons">Dragons</NavLink>
        </li>
        <li>
          <NavLink to="/myProfile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
