import { Router, useActionData, useNavigate, Link } from "react-router-dom";
import Login from "../pages/Login";

function Header() {
    const navi = useNavigate();
    const onClickLgn=()=>{
        navi("/Login")
    }
    return(
        <div>
            <h1>사이트 이름</h1>
            <button onClick={onClickLgn}>로그인</button>
            <button >회원가입</button>
        </div>
    )
}

export default Header;