import { useEffect, useState } from "react";
function SetTimeOut_Interval() {
    const [countdown, setCounDown] = useState(180);
    useEffect(() => {
        const timeId = setInterval(() => {
            setCounDown(prev => prev - 1);
        }, 1000);

        return () => {
            clearInterval(timeId);
        }
    }, [])
    return (
        <>
            <h1>{countdown}</h1>
        </>
    )
}
export default SetTimeOut_Interval;