import React, { useState } from 'react';
import './App.css';

export default function AppXY() {
    const [state, setState] = useState([]);

    const mouseCrd = (event) => {
        const dup = [...state];
        dup[0] = event.clientX - 15;
        dup[1] = event.clientY - 15;
        setState(dup);
    }

    return (
        <div className="container" onMouseMove={mouseCrd}>
            <div className="pointer" style={{left: state[0]+'px', top: state[1]+'px'}}></div>
        </div>
    )
}