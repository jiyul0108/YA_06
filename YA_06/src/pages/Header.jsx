import { Router, useActionData, useNavigate, Link } from "react-router-dom";
import './Header.css';
import Button from "../components/Button";

function Header() {
    const navi = useNavigate();
    const onClickLgn=()=>{
        navi("/Login")
    }
    const onClickSignup=()=>{
        navi("/Signup")
    }

    return(
        <header>
            <Link to={"/"}>Home</Link>
            <div>
                <Button text={"로그인"} onClick={onClickLgn}/>
                <Button text={"회원가입"} onClick={onClickSignup}/>
            </div>
        </header>
    )
}

export default Header;