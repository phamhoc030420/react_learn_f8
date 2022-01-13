import { useState } from "react";
const gifts = [
    'CPU I9',
    'RAM 32G RGB',
    'RGB KeyBoard'
]

function PhanThuong() {
    const [gift, setGift] = useState();
    const handlerLayThuong = () => {
        const i = Math.floor(Math.random() * gifts.length);
        setGift(gifts[i]);
    }
    return (
        <>
            <p>{gift || 'Chưa Có Phần Thưởng'}</p>
            <button onClick={handlerLayThuong}>Lấy Thưởng</button>
        </>
    )
}
export default PhanThuong;