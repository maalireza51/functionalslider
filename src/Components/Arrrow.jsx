import React from 'react'

export default function Arrrow(props) {
    return (
        <div className="arrow-wrapper">
            <div className="round">
                <div id="cta">
                    <span className={`arrow ${props.dir}`} onClick={props.handleclick}></span>
                </div>
            </div>
        </div>
    )
}
