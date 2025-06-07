import { useNavigate } from 'react-router-dom';
import './Login.css'
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';

function Login() {
    const navi = useNavigate();
    const onClickFindId=()=>{
        navi("/FindId")
    }
    const onClickSignup=()=>{
        navi("/Signup")
    }
    const onClickFindPassword=()=>{
        navi("/FindPassword")
    }
    return (
        <div className="login-container">
            <LabelInput text={"아이디"} type="text"/>
            <LabelInput text={"비밀번호"} type="password"/>

            <Button text={"로그인"} className="login-button"/>
            <div className="find-buttons">
                <Button text={"아이디 찾기"} onClick={onClickFindId}/>
                <Button text={"비밀번호 찾기"} onClick={onClickFindPassword}/>
                <Button text={"회원가입"} onClick={onClickSignup}/>
            </div>
        </div>
    );
}

export default Login;

