import { useMemo, useState, useRef } from "react";
function UseMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const nameRef = useRef()
    const handleSubmit = () => {
        setProducts([
            ...products, {
                name,
                price: Number(price)
            }
        ])
        setName('');
        setPrice('')
        nameRef.current.focus()
    }
    const total = useMemo(() => {
        const ruselt = products.reduce((result, pro) =>
            result + pro.price, 0
        )
        return ruselt
    }, [products])
    return (
        <>
            <div>
                <input ref={nameRef} value={name} placeholder="Enter name..." onChange={e => setName(e.target.value)} />
                <br />
                <input value={price} placeholder="Enter price..." onChange={e => setPrice(e.target.value)} />
                <br />
                <button onClick={handleSubmit}>Add</button>
                <br />
                Total: {total}
                <ul>
                    {products.map((item, index) => (
                        <li key={index}>{item.name}-{item.price}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default UseMemo;