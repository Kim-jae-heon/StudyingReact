import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

const initalPerson = {
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
    //const [person, setPerson] = useState(initalPerson);
    const [person, dispatch] = useReducer(personReducer, initalPerson);

    const changeMentorName = () => {
        const prevName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const nameIndex = person.mentors.findIndex(elem => prevName === elem.name);
        if(nameIndex > -1) {
            const currentName = prompt(`이름을 누구로 바꾸고 싶은가요?`);
            //useReducer사용시 바뀌게되는 문장.
            dispatch({ type: 'updated', prevName, currentName });
            //내 버전
            /*const currentName = prompt(`이름을 누구로 바꾸고 싶은가요?`);
            const tempPerson = {
                ...person,
                mentors: [
                    ...person.mentors,
                ]
            }
            tempPerson.mentors[nameIndex].name = currentName;
            setPerson(tempPerson);*/
            // 강사님 버전
            // setPerson(prevPerson => ({
            //     ...prevPerson,
            //     mentors: prevPerson.mentors.map(mentor => {
            //         if(mentor.name === prevName) {
            //             return {...mentor, name: currentName};
            //         }
            //         return mentor;
            //     }),
            // }));
        }
    }

    const addMentor = () => {
        const name = prompt(`멘토를 추가합니다. 이름을 입력해주세요.`);
        const title = prompt(`멘토의 직급을 입력해주세요.`);
        dispatch({ type: 'added', name, title });
        // if(typeof mentor === 'string') {
        //   const title = prompt(`멘토의 직급을 입력해주세요.`);
        //     const tempMentor = {
        //         ...person,
        //         mentors: [
        //             ...person.mentors,
        //             {
        //                 name: mentor,
        //                 title,
        //             }
        //         ]
        //     }
        //     setPerson(tempMentor);
        // }
    }

    const deleteMentor = () => {
        const name = prompt(`멘토를 삭제합니다. 이름을 입력해주세요.`);
        const nameIndex = person.mentors.findIndex(elem => elem.name === name);
        if(nameIndex > -1) {
            dispatch({ type: 'deleted', name });
        }
        // if(nameIndex > -1) {
        //     const tempMentor = {
        //         ...person,
        //         mentors: [
        //             ...person.mentors,
        //         ]
        //     }
        //     delete tempMentor.mentors[nameIndex];
        //     setPerson(tempMentor);
        // }
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