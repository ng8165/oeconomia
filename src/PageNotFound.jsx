import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function PageNotFound() {
    return (
        <>
            <Header />

            <div className="p-5 d-flex flex-column align-items-center">
                <h1>404</h1>
                <div>Oops! We can't find this page.</div>
                <div>But, we're sure you'll find loads of interesting content on our home page!</div>

                <a type="button" href="/" className="btn btn-dark mt-3">Return Home</a>
            </div>

            <Footer />
        </>
    );
}

export default PageNotFound;