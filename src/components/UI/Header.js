import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header">
        <img src={logo} alt="ispent" />
      </div>
    </header>
  );
};

export default Header;
