import React, { useState, useEffect } from 'react'
import Arrrow from './Arrrow'
import Card from './Card'

export default function Slider() {
    const [heroes, setHeroes] = useState([]);
    const [cursur, setCursur] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3001/heroes')
            .then(response => response.json())
            .then(heroes => setHeroes(heroes));
    }, []);

    function handleprev() {
        const current = cursur - 1 < 0 ? (heroes.length - 1) : cursur - 1;
        setCursur(current);
    }

    function handlenext() {
        const current = cursur + 1 < heroes.length ? cursur + 1 : 0;
        setCursur(current);
    }

    return (
        <div className="slide-container">
            <div className="wrapper">
                {!heroes.length ? <div>LOADING . . . </div> :
                <>
                    <Arrrow dir="prev" handleclick={handleprev} />
                    <Card hero={heroes[cursur]} />
                    <Arrrow dir="next" handleclick={handlenext} />
                </>}
            </div>
        </div>
    )
}
