import React, { useState } from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

export default function Navbar() {
    let activeClassName = "text-blue-500";
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(search);
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <header className="w-full bg-slate-700">
            <p className="hidden text-blue-500">asd</p>
            <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                <ul className="flex text-white">
                    <li className="mx-4">
                        <NavLink to="" className={({ isActive }) => `hover:text-red-500 ${isActive ? activeClassName : ''}`}>Home</NavLink>
                    </li>
                    <li className="mx-4">
                        <NavLink to="Movies" className={({ isActive }) => `hover:text-red-500 ${isActive ? activeClassName : ''}`}>Movies</NavLink>
                    </li>
                    <li className="mx-4">
                        <NavLink to="Categories" className={({ isActive }) => `hover:text-red-500 ${isActive ? activeClassName : ''}`}>Categories</NavLink>
                    </li>
                </ul>
                <form
                    onSubmit={handleSubmit}
                    className="inline-block text-black"
                >
                    <i className="fas fa-search text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-2 py-1 rounded"
                        value={search}
                        onChange={handleSearchChange}
                    />
                </form>
            </nav>
        </header>
    );
}
