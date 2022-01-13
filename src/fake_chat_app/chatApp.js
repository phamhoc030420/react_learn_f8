import { useEffect, useState } from "react";

const lessons = [
    {
        id: 1,
        name: 'ReactJS la gi? Tai sao nen hoc'
    }, {
        id: 2,
        name: 'SPA/MPA la gi'
    }, {
        id: 3,
        name: 'Arrow function'
    }
]

function ChatApp() {
    const [lessonId, setLessonId] = useState(1);
    useEffect(() => {

        const handleComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])
    return (
        <>
            {lessons.map(less => (
                <li
                    key={less.id}
                    onClick={() => setLessonId(less.id)}
                    style={{ color: less.id === lessonId ? 'red' : '#fff' }}>
                    {less.name}
                </li>
            ))}
        </>
    )
}
export default ChatApp;