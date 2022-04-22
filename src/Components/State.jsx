import React from 'react'

export default function State({ state, value, noBorder }) {
    return (
        <div className={`one-third ${noBorder}`}>
            <div className="stat">{state}</div>
            <div className="stat-value">{value}</div>
        </div>
    )
}
