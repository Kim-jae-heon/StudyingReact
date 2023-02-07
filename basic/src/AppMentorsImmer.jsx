import React, { useState } from 'react';
import { useImmer } from 'use-immer';

const initialPerson = {
    name: '재헌',
    title: '개발자',
    mentors: [
        {
            name: '엘리',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ],
}

export default function AppMentor() {
 const [person, updatePerson] = useImmer(initialPerson);

    const changeMentorName = () => {
        const prevName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        updatePerson(person => {
            const mentor = person.mentors.find(m => m.name === prevName);
            mentor.name = current;
        });
    }
    const addMentor = () => {
        const name = prompt(`멘토를 추가합니다. 이름을 입력해주세요.`);
        const title = prompt(`멘토의 직급을 입력해주세요.`);
        updatePerson(person => person.mentors.push({ name, title }));
    }

    const deleteMentor = () => {
        const name = prompt(`멘토를 삭제합니다. 이름을 입력해주세요.`);
        updatePerson(person => {
            const index = person.mentors.findIndex(m => m.name === name);
            person.mentors.splice(index, 1);
        })
    }

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 :
            </p>
            <ul>
                {person.mentors.map(mentor => {
                    return (
                        <li>
                            {mentor.name}({mentor.title}) 입니다. 
                        </li>
                    )
                })}
            </ul>
            <button onClick={changeMentorName}>
                멘토이름 바꾸기
            </button>
            <button onClick={addMentor}>
                멘토 추가하기
            </button>
            <button onClick={deleteMentor}>
                멘토 삭제하기
            </button>
        </div>
    );
}