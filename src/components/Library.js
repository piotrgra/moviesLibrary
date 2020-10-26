import React, { Component } from "react";
import LibraryMovie from "./LibraryMovie";

class Library extends Component {
  render() {
    const movies = this.props.movies;

    return (
      <div className="library">
        {movies.length > 0 ? (
          movies.map((movie, i) => (
            <LibraryMovie
              movie={movie}
              key={i}
              onRemoveLibrary={this.props.handleRemoveLibrary}
              handleRating={this.props.handleRating}
              rating={this.props.rating}
            />
          ))
        ) : (
          <h1 className="libraryEmpty">Twoja biblioteka jest pusta :(</h1>
        )}
      </div>
    );
  }
}

export default Library;
