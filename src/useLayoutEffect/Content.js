import { useState, useLayoutEffect } from "react";
import { useEffect } from "react/cjs/react.development";
function Content() {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count])
    const handleCount = () => {
        setCount(count + 1);

    }
    return (
        <>
            <p>{count}</p>
            <button onClick={handleCount}>Click</button>
        </>
    )
}

export default Content;