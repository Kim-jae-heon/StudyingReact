import { useState, useEffect } from 'react';

export default function Products() {
    const [show, setShow] = useState(false);
    const [wears, setWears] = useState([]);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
        .then(res => res.json())
        .then(data => setWears(data));
    }, [checked]);

    const showProducts = () => {
        setShow(prevShow => !prevShow);
    }

    const handleChange = () => {
        setChecked(prevChecked => !prevChecked);
        console.log(checked);
    }

    return (
        <>
            <button onClick={showProducts}>상품 보이기</button>
            <ul>
                {show && wears.map(v => {
                    return (
                        <li key={v.id}>
                            <h3>{v.name}</h3>
                            <span>{v.price}</span>
                        </li>
                    );
                })}
            </ul>
            {show && 
            <>
                <input type="checkbox" 
                id='할인상품' onChange={handleChange}/>
                <label htmlFor="할인상품">
                    할인목록 보기!
                </label>
            </>
            }
            
        </>
    );
}