function Button(props) {
    const bg = props.bg ? 'bg-' + props.bg : 'bg-main';
    const size = props.size ? 'btn-' + props.size : '';
    const animate = props.animate ? 'btn-animate' : '';

    return (
        <button className={`btn ${bg} ${size} ${animate}`} onClick={props.onClick ? props.onClick : null}>
            <span className="btn__txt">{props.children}</span>
            {props.icon ? (
                <span className="btn__icon">
                    <i className={`${props.icon} bx-tada`}></i>
                </span>
            ) : null}
        </button>
    );
}

export default Button;
