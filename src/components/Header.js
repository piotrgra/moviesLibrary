import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="site-title">
        <Link to="/">
          <h1 className="title">Movies Library</h1>
          <p className="subtitle">wyszukiwarka filmów...</p>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/library">Moja biblioteka</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
