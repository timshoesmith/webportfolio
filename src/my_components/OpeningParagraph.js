import React from 'react';
import './OpeningParagraph.css';

function OpeningParagraph(props) {
    return (
        <div className="openParagraphDiv">
            <p> {props.openingP } </p>
        </div>
    )
}

export default OpeningParagraph
