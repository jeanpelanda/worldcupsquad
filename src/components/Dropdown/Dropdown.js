import './Dropdown.css'

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select
                onChange={event => props.setValue(event.target.value)}
                required={props.required}
                value={props.value}>
                <option value=''>{props.placeholder}</option>
                {props.itens.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown