import React, {useState} from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState(initialPerson);
    const personUpdateHandle = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

        // 리액트에서는 동일한 참조값의 오브젝트가 아무리 변경 되더라도 화면을 리렌더링 하지 않는다
        // 이것이 불변성..
        // 리렌더링 하고 싶으면 참조되는 값을 다른 참조 값으로 변경 해야지 가능 함
        // => 무슨 말이냐.. 같은 참조값의 오브젝트를 바로 변경 하지 말고 오브젝트를 복사해 새로운 참조값을 만든 후 그 값을 set 해준다

        setPerson((person) => ({
            ...person, mentors: person.mentors.map((mentor) => {
                if (mentor.name === prev) {
                    return mentor.name = current;
                }
                return mentor;
            })
        }))

    }
    const personAddHandle = () => {
        const name = prompt(`추가할 이름을 적어요`);
        const title = prompt('추가할 타이틀을 적어요');

        setPerson((person) => ({
            ...person, mentors: [...person.mentors, {name, title}]
        }))


    }
    const personDeleteHandle = () => {
        const name = prompt(`삭제할 이름은?`);


        setPerson((person) => ({
            ...person, mentors: person.mentors.filter((mentor) => (mentor.name !== name))
        }))


    }
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는:</p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={personUpdateHandle} > 멘토의 이름을 바꾸기  </button>
            <button onClick={personAddHandle}> 멘토 추가 하기</button>
            <button onClick={personDeleteHandle}> 멘토 삭제하기</button>

        </div>
    );
}

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ],
};
