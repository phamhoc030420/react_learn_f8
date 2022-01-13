
import ButtonBtn from ".";
import GlobalStyle from "./global";

function Main() {
    return (
        <>
            <GlobalStyle>
                <ButtonBtn />
                <ButtonBtn primary />
                <ButtonBtn primary disable />

            </GlobalStyle>
        </>
    )
}
export default Main;