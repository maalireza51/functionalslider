import React from 'react'
import State from './State'

export default function UnitStates({units,name}) {

    const state = units.map((unit,index)=><State state={unit.state} value={unit.value} noBorder={index===units.length-1&&'no-border'}/>);

    return (
        <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>
            {state}
        </div>
    )
}
