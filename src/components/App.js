import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Library from "./Library";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const API_KEY = "685a6224";
class App extends Component {
  state = {
    movies: "",
    library: [],
    search: "",
  };

  fetchMovies = async (title = "harry") => {
    await fetch("http://www.omdbapi.com/?s=" + title + "&apikey=" + API_KEY)
      .then((respons) => respons.json())
      .then((data) => {
        this.setState({
          movies: data.Search,
        });
      });
  };

  fetchMoviesWithId = async (imdbId) => {
    await fetch("http://www.omdbapi.com/?i=" + imdbId + "&apikey=" + API_KEY)
      .then((respons) => respons.json())
      .then((data) => {
        this.setState({
          library: [...this.state.library, data],
        });
      });
  };

  handleAddLibrary = (movieId) => {
    if (this.state.library.length > 0) {
      this.state.library.filter((movie) => {
        if (movie.imdbID !== movieId) {
          this.fetchMoviesWithId(movieId);
        }
      });
    } else {
      this.fetchMoviesWithId(movieId);
    }
  };

  handleRemoveLibrary = (movieId) => {
    const newLibrary = [...this.state.library].filter(function (value) {
      return value.imdbID !== movieId;
    });

    this.setState({
      library: newLibrary,
    });
  };

  handleSearch = (e) => {
    this.setState(
      {
        search: e.target.value,
      },
      function () {
        if (this.state.search.length >= 3) {
          this.fetchMovies(this.state.search);
        }
      }
    );
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/library">
              <Library
                movies={this.state.library}
                handleRemoveLibrary={this.handleRemoveLibrary}
              />
            </Route>
            <Route path="/">
              <Home
                handleAddLibrary={this.handleAddLibrary}
                movies={this.state.movies}
                handleSearch={this.handleSearch}
                value={this.state.search}
              />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
