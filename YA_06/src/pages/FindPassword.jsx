import './Login.css'
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';

function FindPassword(){
    return(
        <div className="login-container">
            <LabelInput text={"아이디"}/>
            <LabelInput text={"이메일"}/>
            <Button text={"인증번호 전송"}/>
            <LabelInput text={"이메일 인증번호"}/>
            <Button text={"인증번호 확인"}/>
            <Button text={"뒤로가기"}/>
        </div>
    )
}

export default FindPassword;