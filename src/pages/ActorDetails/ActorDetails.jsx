import React, { useState, useEffect } from "react";
import axios from "axios";

const ActorDetails = () => {
  const [actor, setActor] = useState({});
  const id = window.location.pathname.split("/").pop();
  const URL = `https://api.themoviedb.org/3/person/${id}?api_key=6a0bd479dfaa0b7a22956162ac8159dd`;

  useEffect(() => {
    axios.get(URL).then((res) => setActor(res.data));
  }, [URL]);

  return (
    <div className="actor-detail-container">
      <img
        className="img-actor"
        src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
        alt={actor.name}
      />
      <div className="actor-detail">
        <h1 className="actor-name-detail">{actor.name}</h1>
        <p className="Date-de-naissance">
          Date de naissance:{" "}
          <span className="info-actor">{actor.birthday}</span>
        </p>
        <p className="Lieu-de-naissance">
          Lieu de naissance:{" "}
          <span className="info-actor">{actor.place_of_birth}</span>
        </p>
        <p className="Biographie">
          Biographie: <span className="info-actor">{actor.biography}</span>
        </p>
      </div>
    </div>
  );
};

export default ActorDetail;
