import React, { useState } from "react";
import './Loading.css';

export default function Loading() {
    const [loading, setLoading] = useState(false);

    return (
        <div id="loading-screen" className={loading ? '' : 'hidden'}>
            <div id="loading-animation"></div>
        </div>
    );
}