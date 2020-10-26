import React, { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./Main.css";

class Main extends Component {
  onAddLibrary = async () => {
    if (typeof this.props.onAddLibrary === "function") {
      await this.props.onAddLibrary(this.props.movie.imdbID);
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
      <div className="movie">
        <div className="movieCard">
          <div className="movieLeft">
            <div className="moviePoster">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          </div>
          <div className="movieRight">
            <div className="movieTitle">
              <h3>{movie.Title}</h3>
            </div>
            <div className="movieActions" onClick={this.onAddLibrary}>
              <p className="favouriteButton">
                <FavoriteIcon /> Dodaj do biblioteki
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
