function LabelInput({text, type}){
    return(
        <div className="input-group">
            <label>{text}</label>
            <input type={type} />
        </div>
    )
}

export default LabelInput;