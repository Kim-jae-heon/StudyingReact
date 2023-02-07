import React, { useState } from 'react';
import './App.css';

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: '재헌',
        title: '개발자',
        mentor: {
            name: '엘리',
            title: '시니어개발자',
        },
    });

    const changeMentorName = () => {
        const name = prompt(`what's your mentor's name?`);
        setPerson(prevPerson => ({...prevPerson, mentor: {...prevPerson.mentor, name}}));
    }

    const changeMentorTitle = () => {
        const title = prompt(`what's your mentor's title?`);
        setPerson(prevPerson => ({...prevPerson, mentor: {...prevPerson.mentor, title}}));
    }

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
            </p>
            <button onClick={changeMentorName}>
                멘토이름 바꾸기
            </button>
            <button onClick={changeMentorTitle}>
                멘토타이틀 바꾸기
            </button>
        </div>
    );
}