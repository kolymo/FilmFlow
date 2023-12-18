import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { actors } from "../../services/FetchData";
import "./ActorDetails.css";


const ActorDetails = () => {
    const [actor, setActor] = useState({});

    const location = useLocation();
    const id = location.state.id;

    useEffect(() => {
        actors.details(id).then((data) => setActor(data));
    }, [id]);

    return (
        <div className="actor-detail-container container mx-auto">
            <img
                className="img-actor"
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
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
                    Biographie:{" "}
                    <span className="info-actor">{actor.biography}</span>
                </p>
            </div>
        </div>
    );
};

export default ActorDetails;
