function Helmet(props) {
    document.title = 'Yolo - ' + props.title;
    return <div>{props.children}</div>;
}

export default Helmet;
