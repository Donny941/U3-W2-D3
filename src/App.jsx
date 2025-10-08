import "./App.css";

import { Component } from "react";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import TvShows from "./pages/TvShows";
import Settings from "./pages/Settings";
import Profile from "./pages/profile";
import NetflixNav from "./components/NetflixNav";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";

class App extends Component {
  render() {
    return (
      <div className=" bg-netflixbg">
        <BrowserRouter>
          <NetflixNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-shows" element={<TvShows />} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
