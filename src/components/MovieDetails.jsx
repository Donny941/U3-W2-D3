import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";

function MovieDetails() {
  const params = useParams();
  const filmId = params.id;

  const [film, setFilm] = useState(null);
  const [comments, setComment] = useState([]);

  const filmLoad = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=${filmId}&apikey=608961b1`);
      if (response.ok) {
        // console.log(`films`, response);
        const data = await response.json();
        console.log(`films dtat`, data);

        setFilm(data);
      } else {
        throw new Error("Film not Found!");
      }
    } catch (Error) {
      console.log(Error);
    }
  };
  const commentLoad = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${filmId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMDUxYzZmMzAyMjAwMTUxMDgwYjgiLCJpYXQiOjE3NTk4NDA4MDUsImV4cCI6MTc2MTA1MDQwNX0.DuFulFdc1w-VVaa3XWOeQRHLhJN2Yj1Unl_hDynp50g",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(`films comment`, data);
        setComment(data);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (filmId) {
      filmLoad();
      commentLoad();
    }
  }, [filmId]);

  return (
    <>
      {film && (
        <Row md={1} lg={1} xl={2} className="p-5 mx-7">
          <Col>
            <img src={film.Poster} alt="filmPoster" className="ms-7" />
          </Col>
          <Col>
            <h5 style={{ width: "200px" }}>{film.Title}</h5>
            <small>{film.Runtime}</small>
            <p>Year: {film.Year}</p>
            <small className="font-actors text-muted">Actors: {film.Actors}</small>
            <p className="">{film.Plot}</p>
            <div>
              <h4>Comments:</h4>
              {comments.map((comment) => {
                return (
                  <div key={comment._id}>
                    <h6>{comment.author}</h6>
                    <p>{comment.comment}</p>
                    <small>{`Rating: ${comment.rate}`}</small>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      )}
    </>
  );
}

export default MovieDetails;
