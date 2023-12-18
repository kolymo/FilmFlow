import { useState, useEffect } from "react";
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


    /* useEffect(() => {
        console.log(movies);
    }, [movies]); */
    

    return (
        <main>
            <HomeCarousel movies={movies.trending} options={
                { settings: {slidesToShow: 1, arrows: false, autoplay: true, dots: false, variableWidth: true},
                image: {type: 'backdrop', width: 'original'}}}
            />
            <div className="container mx-auto mt-28">
                <div className="my-14">
                    <h1 className="text-white text-5xl font-semibold px-2 py-2 my-2 bg-slate-700 rounded inline-block">Popular</h1>
                    <Carousel movies={movies.popular} options={
                        { settings: {slidesToShow: 5, arrows: true, autoplay: false, dots: false, variableWidth: true},
                        image: {type: 'poster', width: 'w500'}}}
                    />
                </div>
                <div className="my-14">
                    <h1 className="text-white text-5xl font-semibold px-2 py-2 my-2 bg-slate-700 rounded inline-block">Top Rated</h1>
                    <Carousel movies={movies.toprated} options={
                        { settings: {slidesToShow: 5, arrows: true, autoplay: false, dots: false, variableWidth: true},
                        image: {type: 'poster', width: 'w500'}}}
                    />
                </div>
                <div className="my-14">
                    <h1 className="text-white text-5xl font-semibold px-2 py-2 my-2 bg-slate-700 rounded inline-block">Upcoming</h1>
                    <Carousel movies={movies.upcoming} options={
                        { settings: {slidesToShow: 5, arrows: true, autoplay: false, dots: false, variableWidth: true},
                        image: {type: 'poster', width: 'w500'}}}
                    />
                </div>
            </div>
        </main>
    );
}