// MovieDetail.js
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieDetails.css";
import { useNavigate, useLocation } from "react-router-dom";
import { films } from "../../services/FetchData";
import Carousel from "../../components/Carousel/Carousel";

const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const [actor, setActor] = useState([]);

    const location = useLocation();
    const id = location.state.id;

    useEffect(() => {
        films.details(id).then((data) => setMovie(data));
        films.credits(id).then((data) => setActor(data.cast));
    }, [id]);

    useEffect(() => {
        console.log(actor);
    }, [actor]);

    /* useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=6a0bd479dfaa0b7a22956162ac8159dd`
        );
        setMovie(response.data);

        const actorResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6a0bd479dfaa0b7a22956162ac8159dd`
        );
        setActor(actorResponse.data.cast);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du film",
          error
        );
      }
    };

    fetchMovieDetail();
  }, [id]); */

    function convertirTempsEnHMN(tempsEnMinutes) {
        const heures = Math.floor(tempsEnMinutes / 60);
        const minutes = tempsEnMinutes % 60;

        return `${heures}h${minutes}min`;
    }

    return (
        <div>
            <div>
                <img
                    className="backdrop"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                />

                <div className="container2">
                    <div className="Affiche">
                        <img
                            className="im-film"
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>

                    <div className="detail">
                        <div className="texte">
                            <h1 className="title_movie">{movie.title}</h1>
                            <p className="genre">
                                Genre:{" "}
                                <span className="vote_count">
                                    {movie.genres &&
                                        movie.genres
                                            .map((genre) => genre.name)
                                            .join(", ")}
                                </span>
                            </p>
                            <p className="date">
                                Date de sortie:{" "}
                                <span className="realease_date">
                                    {movie.release_date}
                                </span>{" "}
                            </p>
                            <p className="temps">
                                Temps :{" "}
                                <span className="vote_count">
                                    {convertirTempsEnHMN(movie.runtime)}
                                </span>
                            </p>
                            <p className="vote">
                                Vote :{" "}
                                <span className="vote_count">
                                    {movie.vote_average} %
                                </span>
                            </p>

                            <p className="synopsis">
                                Synopsis:
                                <br />
                                <span className="movie_overwiew">
                                    {movie.overview}
                                </span>
                            </p>
                            <button className="custom-btn btn-3">
                                <span>Bande Annonce</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="actors-container">
                <h2 className="Acteurs">Acteurs:</h2>
                <ul className="ul-actor">
                    {actor.slice(0, 10).map((actor) => (
                        <li key={actor.id} className="li-actor">
                            <img
                                className="imgs-actors"
                                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                                alt={actor.name}
                            />
                            <p className="actors_names">{actor.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div className="actors-container">
                <h2 className="Acteurs">Acteurs:</h2>
                <ul className="ul-actor">
                    {actor.slice(0, 10).map((actor) => (
                        <Link to={`/actor/${actor.id}`} key={actor.id}>
                            <li className="li-actor">
                                <img
                                    className="imgs-actors"
                                    src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                                    alt={actor.name}
                                />
                                <p className="actors_names">{actor.name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div> */}
        </div>
    );
};

export default MovieDetails;
