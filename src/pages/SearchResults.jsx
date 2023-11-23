import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = (props) => {
    const location = useLocation();
    const { results, query } = location.state || { results: [], query: "" };

    console.log(results);

    return (
        <main className="container m-auto">
            <div className="flex justify-center mt-4">
                <h1 className="text-white text-5xl font-semibold">Results for "{query}"</h1>
                <div className="grid grid-cols-5 gap-4 mt-4">
                    {results.titles.results.map(result => (
                        <li key={result.id}>{result.title}</li>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SearchResults;
