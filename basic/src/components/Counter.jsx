import { useState } from "react";

export default function Counter({ totalPlus }) {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(prevCount => prevCount + 1);
        totalPlus(prevTotal => prevTotal + 1);
    }

    return (
        <div className="counter">
            <span className="number">{count}</span>
            <button className="button"
            onClick={addCount}>add +</button>
        </div>
    );
}