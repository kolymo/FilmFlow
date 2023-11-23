import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    //const navigate = useNavigate();

    const id = location.state;
    console.log(id)
    //if (!id) navigate('/');


    return (
        <main className="container m-auto">
            
        </main>
    );
};

export default SearchResults;
