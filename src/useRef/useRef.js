import { useEffect, useState, useRef } from "react";
// luu gia tri bat ki qua mot tham chieu bat ki ben ngoai function component
function UseRef() {
    const [count, setCount] = useState(60);
    const timer = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();
    useEffect(() => {
        prevCount.current = count;
    }, [count])

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect)
    })
    const handleStart = () => {
        timer.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)

    }
    const handleStop = () => {
        clearInterval(timer.current)
    }
    console.log(count, prevCount.current);
    return (
        <>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}
export default UseRef;