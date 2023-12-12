import React, { useState, useEffect } from "react";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
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
        <main>
            <HomeCarousel movies={movies.trending} options={{ settings: {slidesToShow: 1, arrows: false, autoplay: true, dots: false, variableWidth: true}, image: {type: 'backdrop', width: 'original'}}} />
        </main>
    );
}