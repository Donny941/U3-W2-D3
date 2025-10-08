import { Component } from "react";
import { Button } from "react-bootstrap";
import { PlayCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router";

class FilmBio extends Component {
  state = {
    film: [],
  };

  filmLoad = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=${this.props.idFilm}&apikey=608961b1`);
      if (response.ok) {
        const data = await response.json();
        this.setState({ film: data });
        console.log(data);
      } else {
        throw new Error("Film not Found!");
      }
    } catch (Error) {
      console.log(Error);
    }
  };

  componentDidMount = () => {
    this.filmLoad();
  };
  render() {
    return (
      <div className="p-2 z-2 bg-netflixbg w-100 d-flex flex-column justify-content-between border border-start-0 border-3 rounded">
        <div>
          <h5 style={{ width: "200px" }}>{this.state.film.Title}</h5>
          <small>{this.state.film.Runtime}</small>
          <p>Year: {this.state.film.Year}</p>
          <small className="font-actors text-muted">Actors: {this.state.film.Actors}</small>
          <p className="desc-cut">{this.state.film.Plot}</p>
        </div>
        <div className="d-flex justify-content-end">
          <Button>
            <Link to={`/movie-details/${this.props.idFilm}`}>Details</Link>
          </Button>
          {/* <PlayCircleFill className="fs-2 me-3 text-netflixred" /> */}
        </div>
      </div>
    );
  }
}
export default FilmBio;
