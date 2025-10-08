import { Component } from "react";
import { Container, Spinner } from "react-bootstrap";
import Slider from "react-slick";

import SingleFilm from "./SingleFilm";

class FilmGallery extends Component {
  state = {
    films: [],
    loading: true,
  };
  filmLoad = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${this.props.listFilms}&apikey=608961b1`);
      if (response.ok) {
        const data = await response.json();
        this.setState({ films: data.Search });
        console.log(data);
      } else {
        throw new Error("Film not Found!");
      }
    } catch (Error) {
      console.log(Error);
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.filmLoad();
  }
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 7,
      speed: 500,
    };
    return (
      <Container className="mt-4">
        <h3 className="mb-3">{this.props.galleryTitle}</h3>
        <div className="slider-container">
          {this.state.loading && <Spinner animation="grow" variant="danger" />}
          <Slider {...settings}>
            {this.state.films.map((film) => (
              <SingleFilm key={film.imdbID} film={film} />
            ))}

            {/* <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
          </Slider>
        </div>
      </Container>
    );
  }
}

export default FilmGallery;
