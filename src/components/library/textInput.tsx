
function TextInput(props:any) {
    return (
        <div className="text-input">
            <label>{props.label}</label>
            <input type={props.type || "text"} />
        </div>
    )
}

export default TextInput;