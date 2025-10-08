import { Component } from "react";
import FilmBio from "./FilmBio";

class SingleFilm extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <div className="d-flex">
        <img
          onClick={() => this.setState({ selected: !this.state.selected })}
          src={this.props.film.Poster}
          alt="film"
          style={{ width: "95%", height: "300px", aspectRatio: "1/1", objectFit: "cover", margin: "0 8px" }}
        />

        {this.state.selected && <FilmBio idFilm={this.props.film.imdbID} />}
      </div>
    );
  }
}
export default SingleFilm;
