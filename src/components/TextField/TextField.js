import './TextField.css'

const TextField = (props) => {

    const onChange = (event) => {
        props.setValue(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                onChange={onChange}
                required={props.required}
                placeholder={props.placeholder}
                value={props.value}
            />
        </div>
    )
}

export default TextField