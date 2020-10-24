import React, { Component } from "react";
import Main from "./Main";

class Library extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <>
        {movies.map((movie, i) => (
          <Main
            movie={movie}
            key={i}
            onRemoveLibrary={this.props.handleRemoveLibrary}
          />
        ))}
      </>
    );
  }
}

export default Library;
