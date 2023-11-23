import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { search } from "../../services/FetchData";

export default function SearchBar() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();

        if (searchValue === "") return;

        search.all(searchValue).then((data) => {
            const results = data;
            const query = searchValue;
            navigate('/search-results', { state: { results, query } });
        });
    };

    return (
        <form onSubmit={handleSearch} className="inline-block text-black">
            <i className="fas fa-search text-gray-400 mr-2" />
            <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 rounded"
                value={searchValue.trim()}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </form>
    );
}
