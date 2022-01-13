import { useCallback, useState } from "react";
import Content from "./content";
function Memo() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [])
    return (
        <>
            <Content onIncrease={handleClick} />
            <p>{count}</p>
            {/* <button onClick={handleClick}>Click me!</button> */}
        </>
    )
}
export default Memo;
// memo giup ghi nho props cua component de quyet dinh co render lai component hay khong
// giup xu li khong rehandle lai component khi khong can thiet