import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const { results, query } = location.state || { results: [], query: "" };

    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate('/movie-details', { state: { id } });
    }

    return (
        <main className="container m-auto">
            <div className="flex justify-center mt-4 items-center flex-col pb-20">
                <h1 className="text-white text-5xl font-semibold">
                    Results for "{query}"
                </h1>
                <br />
                <div className="grid grid-cols-5 gap-16 mt-4">
                    {results.titles.map((result) => (
                        <div className="hover:cursor-pointer">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                                alt=""
                                onClick={() => handleClick(result.id)}
                            />
                            <h3 className="text-white text-2xl text-center">{result.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SearchResults;
