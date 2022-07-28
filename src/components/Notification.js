function Notification() {
    const localData = JSON.parse(localStorage.getItem('cartItem'));
    const data = localData ? localData : [];

    return data.length ? (
        <div className="notify">
            <span>{data.length}</span>
        </div>
    ) : null;
}

export default Notification;
