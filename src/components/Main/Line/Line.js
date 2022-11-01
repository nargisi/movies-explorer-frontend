import React from "react";
import '../Line/Line.css'

function Line (props) {
    return (
        <h3 className="line__title">{props.children}</h3>
    )
}

export default Line