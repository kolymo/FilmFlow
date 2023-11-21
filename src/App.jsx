import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Categories from "./pages/Categories";
import Error from "./pages/Error";
//import FetchData from "./services/FetchData";
import Loading from "./components/Loading/Loading";
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
                    <Route path="Movies" element={<Movies />} />
                    <Route path="Categories" element={<Categories />} />
                    <Route path="*" element={<Error />} />
                </Routes>

                <Footer />
            </Router>
        </>
    );
}
