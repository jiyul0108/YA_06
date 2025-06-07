import { useNavigate } from 'react-router-dom';
import './Login.css'
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';
function Signup() {

    return (
        <div className="login-container">
            <LabelInput text={"아이디"} type="text" className="input-group"/>
            <LabelInput text={"이메일"} type="text" className="input-group"/>
            <LabelInput text={"비밀번호"} type="text" className="input-group"/>
            <LabelInput text={"비밀번호확인"} type="text" className="input-group"/>

            <div className="find-buttons">
                <Button text={"비밀번호 확인"}/>
                <Button text={"가입하기"}/>
                <Button text={"뒤로가기"}/>
            </div>
        </div>
    );
}

export default Signup;

