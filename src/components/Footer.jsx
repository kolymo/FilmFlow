import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full bg-slate-700 text-white z-10">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center">
                    © 2023{" "}
                    <a href="/">
                        ABCie
                    </a>
                    &nbsp;| All Rights Reserved
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li>
                        <NavLink to="./about">
                            <p className="mr-4 md:mr-6 hover:text-red-500">About</p>
                        </NavLink>
                    </li>
                    {/* <li>
                        <a href="/" className="mr-4 md:mr-6 hover:text-red-500">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="/" className="mr-4 md:mr-6 hover:text-red-500">
                            Licensing
                        </a>
                    </li>
                    <li>
                        <a href="/" className="hover:text-red-500">
                            Contact
                        </a>
                    </li> */}
                </ul>
            </div>
        </footer>
    );
}
