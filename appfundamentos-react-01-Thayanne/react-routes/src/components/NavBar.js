import { Outlet, Link } from "react-router-dom";
import "./NavBar.Modules.css";

function NavBar() {
  return (
    <>
      <ul className="list">
        <li className="item">
          <Link to="/">HOME</Link>
        </li>
        <li className="item">
          <Link to="/empresa">EMPRESA</Link>
        </li>
        <li className="list">
          <Link to="/contato">CONTATO</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default NavBar;
