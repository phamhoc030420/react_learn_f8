import { useState, memo } from "react";
function Content({ onIncrease }) {
    console.log("reder")
    return (
        <><p>
            Hello, Hi
        </p>
            <button onClick={onIncrease}>Click me!</button>
        </>

    )
}
export default memo(Content);