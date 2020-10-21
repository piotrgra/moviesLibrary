import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="site-title">
        <h1 className="title">Movies Library</h1>
        <p className="subtitle">wyszukiwarka filmów...</p>
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>Moja biblioteka</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
