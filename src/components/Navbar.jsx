import "../styles/Navbar.css";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({isHome}) => {
  return (
    <nav className="Navbar">
      <img src={Logo} alt="logo" />
      <div className="Links">
        <Link to={isHome === true ? "/tools" : "/"}>
          <p>{(isHome ===true ? "outils" : "accueil")}</p>
          {isHome}
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
    isHome: PropTypes.bool.isRequired,
  };

export default Navbar;
