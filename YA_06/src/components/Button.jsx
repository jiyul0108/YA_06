function Button({text, onClick}){
    return(
        <button onClick={onClick} className={``}>
            {text}
        </button>
    )
}

export default Button;