import {useState} from 'react';

import './App.css';
import Counter from './components/Counter';

function AppCounter() {
    const [total, setTotal] = useState(0);

    return (
        <div className='container'>
            <div className='total'>
                총 점수는 {total}입니다! {total > 10 ? '🤩' : '😪'}
            </div>
            <Counter totalPlus={setTotal}/>
            <Counter totalPlus={setTotal}/>
        </div>
    );
}

export default AppCounter;
