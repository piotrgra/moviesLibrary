import React, { Component } from "react";
import Main from "./Main";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Home.css";

class Home extends Component {
  render() {
    const { movies, search, loading } = this.props;
    return (
      <div className="home">
        <form>
          <input
            type="text"
            placeholder="nazwa filmu..."
            value={search}
            onChange={(e) => this.props.handleSearch(e)}
          />
        </form>
        <div className="main">
          {!loading &&
          movies !== undefined &&
          movies !== null &&
          movies !== "" ? (
            movies.map((movie, i) => (
              <Main
                movie={movie}
                key={i}
                onAddLibrary={this.props.handleAddLibrary}
              />
            ))
          ) : (
            <CircularProgress className="loading" />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
