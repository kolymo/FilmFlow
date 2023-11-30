import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel/Carousel";
import { films } from "../services/FetchData";

export default function Home() {
    const [movies, setMovies] = useState({ 
        popular: [],
        trending: [],
        toprated: [],
        upcoming: []
    });
    
    useEffect(() => {
        films.popular().then(data => {
            setMovies(prevMovies => ({ ...prevMovies, popular: data.results }));
        });
        films.trending().then(data => {
            setMovies(prevMovies => ({ ...prevMovies, trending: data.results }));
        });
        films.toprated().then(data => {
            setMovies(prevMovies => ({ ...prevMovies, toprated: data.results }));
        });
        films.upcoming().then(data => {
            setMovies(prevMovies => ({ ...prevMovies, upcoming: data.results }));
        });
    }, []);


    useEffect(() => {
        console.log(movies);
    }, [movies]);
    

    return (
        <main className="h-screen">
            <Carousel movies={movies.popular} options={{ settings: {slidesToShow: 5, arrows: false, autoplay: true, dots: false}, image: {type: 'backdrop', width: 'w500'}}} />
        </main>
    );
}