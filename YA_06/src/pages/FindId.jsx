import { useNavigate } from 'react-router-dom';
import './Login.css'
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';

function FindId() {
    const navi = useNavigate();
    const onClickBack = () => {
        navi("/Login")
    }
    return (
        <div className="login-container">
            <LabelInput text={"이메일"} type="text"/>
            <Button text={"인증번호 전송"}/>
            <LabelInput text={"이메일 인증번호"} type="password"/>
            <Button text={"인증번호 확인"}/>
            <Button text={"뒤로가기"}/>


        </div>
    );
}

export default FindId;

