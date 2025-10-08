import FilmGallery from "../components/FilmGallery";
import Footer from "../components/Footer";

import MainHead from "../components/MainHead";

const TvShows = () => {
  return (
    <div className="bg-netflixbg">
      <MainHead />
      <FilmGallery galleryTitle="Trending Now" listFilms="mafia" />
      <FilmGallery galleryTitle="New Releases" listFilms="scary movie" />
      <FilmGallery galleryTitle="Watch It Again" listFilms="putin" />
    </div>
  );
};

export default TvShows;
