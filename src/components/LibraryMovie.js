import React, { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import "./LibraryMovie.css";

class LibraryMovie extends Component {
  onRemoveLibrary = () => {
    if (typeof this.props.onRemoveLibrary === "function") {
      this.props.onRemoveLibrary(this.props.movie.imdbID);
    }
  };

  render() {
    const { movie, rating } = this.props;
    return (
      <div className="libraryMovie">
        <div className="libraryMovieMain">
          <div className="libraryMoviePoster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="libraryMovieDescription">
            <div className="movieTitle">
              <h3>{movie.Title}</h3>
              <div className="underTitle">
                <p className="libraryNumbers">
                  {movie.Year} czas trwania: {movie.Runtime}
                </p>
                <p className="libraryRatings">
                  Ocena: {movie.imdbRating} / {movie.imdbVotes}
                </p>
              </div>
            </div>
            <p className="libraryMoviePlot">{movie.Plot}</p>
          </div>
        </div>
        <div className="libraryMovieActions">
          <div
            className="libraryFavouriteButton"
            onClick={this.onRemoveLibrary}
          >
            <FavoriteIcon />
            <span>Usun z ulubionych</span>
          </div>

          <Box component="fieldset" mb={3} borderColor="transparent">
            <span>Twoja ocena:</span>
            <Rating
              name={movie.imdbID}
              value={rating[movie.imdbID] ? rating[movie.imdbID] : 0}
              onChange={(event, newValue) =>
                this.props.handleRating(event, newValue)
              }
            />
          </Box>
        </div>
      </div>
    );
  }
}

export default LibraryMovie;
