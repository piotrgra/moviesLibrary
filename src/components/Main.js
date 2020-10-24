import React, { Component } from "react";

import "./Main.css";

class Main extends Component {
  onAddLibrary = () => {
    if (typeof this.props.onAddLibrary === "function") {
      this.props.onAddLibrary(this.props.movie.imdbID);
    }
  };

  onRemoveLibrary = () => {
    if (typeof this.props.onRemoveLibrary === "function") {
      this.props.onRemoveLibrary(this.props.movie.imdbID);
    }
  };

  render() {
    const { movie } = this.props;
    return (
      <div className="main">
        <div className="movie">
          <h3>{movie.Title}</h3>
          <h4>{movie.Year}</h4>
          <div className="movieMain">
            <div className="moviePoster">
              <img src={movie.Poster} alt="" />
            </div>
            {this.props.onAddLibrary ? (
              <div className="movieActions">
                <p>
                  <strong onClick={this.onAddLibrary}>
                    Dodaj do ulubionych
                  </strong>
                </p>
              </div>
            ) : (
              <div className="movieActions">
                <p>
                  <strong onClick={this.onRemoveLibrary}>
                    Dodaj do ulubionych
                  </strong>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
