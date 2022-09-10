import React from "react";
import Section from "./Section";
import Link from "./Link";

function Mailing(props) {
    return (
        <Section color={props.color}>
            <div className="py-5">
                <h2 className="pb-3" style={{color: props.textColor || "black"}}>Sign up for our mailing list!</h2>
                <Link className="btn btn-light btn-lg" type="button" url="https://docs.google.com/forms/d/e/1FAIpQLSey-wkgMaqiRgYUjJ-qoQi9aiJGI01B57aBiYXH5ETbZTi8AQ/viewform">Contact Us</Link>
            </div>
        </Section>
    );
}

export default Mailing;