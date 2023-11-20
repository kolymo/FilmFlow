import React from "react";

export default function Footer() {
    return (
        <footer className="absolute w-full bg-slate-700 bottom-0 text-white">
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
                        <a href="/" className="mr-4 md:mr-6 hover:text-red-500">
                            About
                        </a>
                    </li>
                    <li>
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
                    </li>
                </ul>
            </div>
        </footer>
    );
}
