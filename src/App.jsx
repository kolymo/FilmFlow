import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Error from "./pages/Error";
import Loading from "./components/Loading/Loading";
import SearchResults from "./pages/SearchResults";
import MovieDetails from "./pages/MovieDetails";
import {
    BrowserRouter as Router,
    NavLink,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

export default function App() {
    return (
        <>
            <Loading />
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Categories" element={<Categories />} />
                    <Route path="/search-results" element={<SearchResults />} />
                    <Route path="/movie-details" element={<MovieDetails />} />
                    <Route path="*" element={<Error />} />
                </Routes>

                <Footer />
            </Router>
        </>
    );
}
