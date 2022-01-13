import { useState } from "react";
const courses = [
    {
        id: 1,
        name: 'ABC,CSS'
    },
    {
        id: 2,
        name: 'Hook-Function'
    },
    {
        id: 3,
        name: 'ReactJS-Hook'
    }
]
function CheckBox() {
    const [checked, setChecked] = useState([]);
    console.log(checked);
    const handlerCheckBox = () => {

    }
    const handlerChange = (id) => {
        setChecked(prev => {
            const isCheck = checked.includes(id);
            if (isCheck) {
                return checked.filter(item => item !== id)
            }
            else {
                return [...prev, id];
            }
        })
    }
    return (
        <>
            {courses.map((item, index) => (
                <div key={index}>
                    <input type={"checkbox"} checked={checked.includes(item.id)} onChange={() => handlerChange(item.id)} />
                    {item.name}
                </div>
            ))}

            <button onClick={handlerCheckBox}>Register</button>
        </>
    )
}
export default CheckBox;