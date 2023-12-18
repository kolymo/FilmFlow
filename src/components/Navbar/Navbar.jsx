import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
    let activeClassName = "text-blue-500";

    return (
        <header className="w-full bg-slate-700">
            <nav className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
                <div className="flex justify-between w-full md:w-auto">
                    <NavLink to="/">
                        <img src="logo.png" alt="logo" className="h-14" />
                    </NavLink>
                    <button className="text-white md:hidden">
                        {/* Here you can add a hamburger icon for the mobile menu */}
                    </button>
                </div>

                <ul className="flex-col md:flex-row flex md:items-center md:justify-center w-full md:w-auto text-white mt-4 md:mt-0">
                    <li className="mx-4 my-2 md:my-0">
                        <NavLink to="/" className={({ isActive }) => `hover:text-red-500 ${isActive ? activeClassName : ''}`}>Home</NavLink>
                    </li>
                    <li className="mx-4 my-2 md:my-0">
                        <NavLink to="categories" className={({ isActive }) => `hover:text-red-500 ${isActive ? activeClassName : ''}`}>Categories</NavLink>
                    </li>
                    <li className="mx-4 my-2 md:my-0">
                        <NavLink to="about" className={({ isActive }) => `hover:text-red-500 ${isActive ? activeClassName : ''}`}>About</NavLink>
                    </li>
                </ul>
                <SearchBar />
            </nav>
        </header>
    );
}
