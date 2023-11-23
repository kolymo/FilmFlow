import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const { results, query } = location.state || { results: [], query: "" };

    //console.log(results);

    return (
        <main className="container m-auto">
            <div className="flex justify-center mt-4 items-center flex-col pb-20">
                <h1 className="text-white text-5xl font-semibold">
                    Results for "{query}"
                </h1>
                <br />
                <div className="grid grid-cols-5 gap-16 mt-4">
                    {results.titles.map((result) => (
                        <div className="">
                            <a href={`https://www.themoviedb.org/movie/${result.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                                    alt=""
                                />
                                {result.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SearchResults;
