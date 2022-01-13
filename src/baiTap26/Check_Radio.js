import { useState } from "react";
const courses = [
    {
        id: 1,
        name: 'HTML,CSS'
    },
    {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]
function TwoWayBinding() {
    const [checked, setChecked] = useState(1);
    console.log(checked);
    const handlerRadio = () => {

    }
    const handlerChange = () => {

    }
    return (
        <>
            {courses.map((item, index) => (
                <div key={index}>
                    <input type={"radio"} checked={checked === item.id} onChange={() => setChecked(item.id)} />
                    {item.name}
                </div>
            ))}

            <button onClick={handlerRadio}>Register</button>
        </>
    )
}
export default TwoWayBinding;