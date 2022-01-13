import { useEffect, useState } from "react";
function Avatar() {
    const [avatar, setAvatar] = useState();
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handleAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file)
        console.log(file)
        setAvatar(file);

    }
    return (
        <>
            <input type="file" onChange={handleAvatar}>

            </input>
            <div>
                {avatar && (<img src={avatar.preview}></img>)}
            </div>
        </>
    )
}
export default Avatar;