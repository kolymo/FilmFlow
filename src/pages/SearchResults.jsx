import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const { results, query } = location.state || { results: [], query: "" };

    return (
        <main className="container m-auto">
            <div className="flex justify-center mt-4">
                <h1 className="text-white text-5xl font-semibold">Results for "{query}"</h1>
                <ul></ul>
            </div>
        </main>
    );
};

export default SearchResults;
/*
{results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
        */
