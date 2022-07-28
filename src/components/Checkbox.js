import { useRef } from 'react';

function Checkbox(props) {
    const inputRef = useRef();

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current);
        }
    };

    return (
        <label className="custom-checkbox">
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked} />
            <span className="custom-checkbox__checkmark">
                <i className="bx bx-check"></i>
            </span>
            {props.label}
        </label>
    );
}

export default Checkbox;
