import { Link } from "react-router-dom";
import icono from "../assets/react.svg";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav">
        <a className="navbar-brand" href="#">
          <img src={icono} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/user" className="nav-link text-white">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/plans" className="nav-link text-white">
                Plans
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
