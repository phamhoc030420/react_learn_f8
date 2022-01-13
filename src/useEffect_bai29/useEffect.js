import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";
function Effect() {
    //useEffect(callback, [deps])
    // 
    const tabs = ['posts', 'albums', 'photos'];
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);

            })

    }, [type])
    // DOM event scroll 
    useEffect(() => {
        const handlerEvent = () => {
            setShowGoToTop(window.scrollY >= 400)
        }
        window.addEventListener('scroll', handlerEvent)
        return (() => {
            window.removeEventListener('scroll', handlerEvent);
        })
    }, [])


    console.log(type);
    return (
        <>
            {/* <input value={title} onChange={e => setTitle(e.target.value)} /> */}
            {tabs.map(tab => (
                <span key={tab}><button onClick={() => setType(tab)} style={tab === type ? { color: '#fff', backgroundColor: 'black' } : { color: "black" }}>{tab}</button></span>
            ))}

            <ul>
                {posts.map(post => (

                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            {showGoToTop && <button style={{ position: 'fixed', right: 20, bottom: 20 }} onClick={() => { setShowGoToTop(window.scrollY == 0) }}>
                Go To Top
            </button>}
        </>
    )
}
export default Effect;