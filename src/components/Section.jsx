import React from "react";

function Section(props) {
    return (
        <div className="section px-3 py-5" style={{background: props.color}}>
            {props.children}
        </div>
    );
}

export default Section;