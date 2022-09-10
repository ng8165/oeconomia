import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import Home from "./Home";
import Resources from "./Resources";
import Speakers from "./Speakers";
import Equilibrium from "./Equilibrium";
import Competitons from "./Competitions";
import PageNotFound from "./PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/equilibrium" element={<Equilibrium />} />
                <Route path="/competitions" element={<Competitons />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);