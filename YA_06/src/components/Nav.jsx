import { Link } from "react-router-dom";
import Button from "./Button";


function Nav() {
    return(
        <nav>
            <Link to={"/"}>전체 목록 보기</Link>
            <Link to={"/"}>찜목록</Link>
            <Link to={"/"}>추가하기</Link>
            <Button text={"설정버튼"}/>
        </nav>
    )
}

export default Nav;