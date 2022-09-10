import React from "react";

function Link(props) {
    return (<a href={props.url} className={props.className + (props.italic ? " fst-italic" : "")} target="_blank" rel="noreferrer">{props.children}</a>)
}

export default Link;