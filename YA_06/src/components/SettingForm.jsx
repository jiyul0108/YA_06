import Button from "./Button";
import H3 from "./H3";

function SettingForm(){
    return(
        <div>
            <H3 text={"다크모드"}/>
            <Button text={"변경버튼"}/>
            <H3 text={"언어 변경"}/>
            <select name="" id="">
                <option value="">한국어</option>
                <option value="">영어</option>
            </select>
            <Button text={"설정확인"}/>
        </div>
    )
}

export default SettingForm;