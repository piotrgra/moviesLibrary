import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Library from "./Library";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const API_KEY = "685a6224";

class App extends Component {
  state = {
    movies: "",
    library: [],
    search: "",
    rating: [],
    loading: true,
  };

  fetchMovies = (title = "harry") => {
    fetch("http://www.omdbapi.com/?s=" + title + "&apikey=" + API_KEY)
      .then((respons) => respons.json())
      .then((data) => {
        this.setState({
          movies: data.Search,
          loading: false,
        });
      });
  };

  fetchMoviesWithId = (imdbId) => {
    fetch("http://www.omdbapi.com/?i=" + imdbId + "&apikey=" + API_KEY)
      .then((respons) => respons.json())
      .then((data) => {
        this.setState({
          library: [...this.state.library, data],
        });
      });
  };

  handleAddLibrary = (movieId) => {
    //sprawdzanie czy nie ma juz filmu w state
    let test = true;
    this.state.library.map((lib) => {
      if (lib.imdbID === movieId) {
        test = false;
      }
      return null;
    });

    if (test) {
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

  handleRating = (e, newValue) => {
    let newRating = this.state.rating;
    if (this.state.rating[e.target.name]) {
      delete newRating[e.target.name];
    }

    this.setState({
      rating: {
        [e.target.name]: newValue,
        ...newRating,
      },
    });
  };

  handleSearch = (e) => {
    this.setState(
      {
        search: e.target.value,
        loading: true,
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
                handleRating={this.handleRating}
                rating={this.state.rating}
              />
            </Route>
            <Route path="/">
              <Home
                handleAddLibrary={this.handleAddLibrary}
                movies={this.state.movies}
                handleSearch={this.handleSearch}
                value={this.state.search}
                loading={this.state.loading}
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
