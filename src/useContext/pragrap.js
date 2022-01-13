import { useContext } from "react"
import { ThemeContext } from './useContext'
function Pragrap() {
    const theme = useContext(ThemeContext);
    return (

        <><p className={theme}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p></>
    )
}
export default Pragrap