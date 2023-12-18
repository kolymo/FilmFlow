import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";

const SearchResults = () => {
    const location = useLocation();
    const { results, query } = location.state || { results: [], query: "" };

    /* useEffect(() => {
        console.log(results);
    }, []) */

    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate('/movie-details', { state: { id } });
    }

    return (
        <main className="container m-auto">
            <div className="flex justify-center mt-4 items-center flex-col pb-20">
                <h1 className="text-white text-5xl font-semibold px-2 py-2 my-2 bg-slate-700 rounded">
                    Results for "{query}"
                </h1>
                <div className="container mx-auto">
                    <h1 className="text-white text-3xl px-2 py-1 my-2 bg-slate-700 rounded inline-block">Movies</h1>
                    <Carousel movies={results.titles} options={{ settings: {slidesToShow: 5, arrows: true, autoplay: false, dots: false, variableWidth: true}, image: {type: 'poster', width: 'w500'}}} />
                    {/* 
                    <h1 className="text-white text-3xl py-2">Actors</h1>
                    <Carousel movies={results.actors} options={{ settings: {slidesToShow: 5, arrows: true, autoplay: false, dots: false, variableWidth: false}, image: {type: 'poster', width: 'w500'}}} />
                    */}
                </div>
            </div>
        </main>
    );
};

export default SearchResults;
