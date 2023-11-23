import React, { useState } from "react";
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
            <p className="hidden text-blue-500">asd</p>
            <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                <ul className="flex text-white">
                    <li className="mx-4">
                        <NavLink to="" className={({ isActive }) => `hover:text-red-500 ${isActive ? activeClassName : ''}`}>Home</NavLink>
                    </li>
                    <li className="mx-4">
                        <NavLink to="movies" className={({ isActive }) => `hover:text-red-500 ${isActive ? activeClassName : ''}`}>Movies</NavLink>
                    </li>
                    <li className="mx-4">
                        <NavLink to="categories" className={({ isActive }) => `hover:text-red-500 ${isActive ? activeClassName : ''}`}>Categories</NavLink>
                    </li>
                </ul>
                <SearchBar />
            </nav>
        </header>
    );
}
