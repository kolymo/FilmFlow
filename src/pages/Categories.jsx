import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import { films } from "../services/FetchData";

export default function Categories() {
    const [movies, setMovies] = useState({
        action: [],
        comedy: [],
        drama: [],
        scifi: [],
        horror: [],
        fantasy: [],
    });

    useEffect(() => {
        films.genres(28).then((data) => {
            setMovies((prevMovies) => ({
                ...prevMovies,
                action: data.results,
            }));
        });
        films.genres(35).then((data) => {
            setMovies((prevMovies) => ({
                ...prevMovies,
                comedy: data.results,
            }));
        });
        films.genres(18).then((data) => {
            setMovies((prevMovies) => ({
                ...prevMovies,
                drama: data.results,
            }));
        });
        films.genres(878).then((data) => {
            setMovies((prevMovies) => ({
                ...prevMovies,
                scifi: data.results,
            }));
        });
        films.genres(27).then((data) => {
            setMovies((prevMovies) => ({
                ...prevMovies,
                horror: data.results,
            }));
        });
        films.genres(14).then((data) => {
            setMovies((prevMovies) => ({
                ...prevMovies,
                fantasy: data.results,
            }));
        });
    }, []);

    useEffect(() => {
        console.log(movies);
    }, [movies])

    return (
        <main className="container mx-auto py-4">
            <div>
                <h1 className="text-white text-3xl py-2">Action</h1>
                <Carousel movies={movies.action} options={{ settings: {slidesToShow: 5, arrows: true, autoplay: false, dots: false, variableWidth: true}, image: {type: 'poster', width: 'w500'}}} />
            </div>
            <div>
                <h1 className="text-white text-3xl py-2">Comedy</h1>
                <Carousel movies={movies.comedy} options={{ settings: {slidesToShow: 5, arrows: true, autoplay: false, dots: false, variableWidth: true}, image: {type: 'poster', width: 'w500'}}} />
            </div>
            <div>
                <h1 className="text-white text-3xl py-2">Drama</h1>
                <Carousel movies={movies.drama} options={{ settings: {slidesToShow: 5, arrows: true, autoplay: false, dots: false, variableWidth: true}, image: {type: 'poster', width: 'w500'}}} />
            </div>
            <div>
                <h1 className="text-white text-3xl py-2">Science-Fiction</h1>
                <Carousel movies={movies.scifi} options={{ settings: {slidesToShow: 5, arrows: true, autoplay: false, dots: false, variableWidth: true}, image: {type: 'poster', width: 'w500'}}} />
            </div>
            <div>
                <h1 className="text-white text-3xl py-2">Horror</h1>
                <Carousel movies={movies.horror} options={{ settings: {slidesToShow: 5, arrows: true, autoplay: false, dots: false, variableWidth: true}, image: {type: 'poster', width: 'w500'}}} />
            </div>
            <div>
                <h1 className="text-white text-3xl py-2">Fantasy</h1>
                <Carousel movies={movies.fantasy} options={{ settings: {slidesToShow: 5, arrows: true, autoplay: false, dots: false, variableWidth: true}, image: {type: 'poster', width: 'w500'}}} />
            </div>
        </main>
    );
}
