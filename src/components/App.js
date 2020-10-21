import React from "react";
import Header from "./Header";
import Main from "./Main";
import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
