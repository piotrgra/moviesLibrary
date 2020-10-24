import React, { Component } from "react";
import Main from "./Main";

import "./Home.css";

class Home extends Component {
  render() {
    const { movies, search } = this.props;
    return (
      <div className="app">
        <form>
          <input
            type="text"
            placeholder="nazwa filmu..."
            value={search}
            onChange={(e) => this.props.handleSearch(e)}
          />
        </form>
        {movies !== undefined && movies !== null && movies !== "" ? (
          movies.map((movie, i) => (
            <Main
              movie={movie}
              key={i}
              onAddLibrary={this.props.handleAddLibrary}
            />
          ))
        ) : (
          <h2>Spinner</h2>
        )}
      </div>
    );
  }
}

export default Home;
