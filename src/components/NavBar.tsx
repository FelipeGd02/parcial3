import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/list">Lista</Link>
      <Link to="/about">Acerca de</Link>
    </nav>
  );
};

export default Navbar;