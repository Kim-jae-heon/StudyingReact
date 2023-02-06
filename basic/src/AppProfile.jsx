import './App.css';
import Profile from './components/Profile';

function AppProfile() {
    const keyedUp = (event) => {
        console.log(event)
    }
    return (
        <>
            <button onClick={keyedUp}>버튼</button>
            <Profile 
            image='https://images.unsplash.com/photo-1675453442429-1ea5b9652743?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' 
            name='Louis Funnyman' 
            title='프론트엔드 개발자'
            newWorker='O' />
            <Profile 
            image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80' 
            name='Colorado Tornado' 
            title='건축업자'
            newWorker='' />
            <Profile 
            image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' 
            name='Dignitas Stilero' 
            title='상담사'
            newWorker='' />
        </>
    );
}

export default AppProfile;
