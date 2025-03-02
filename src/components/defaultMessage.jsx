function DefaultMessage({user, sendData }) {
    const firstAlphabet = user ? user.charAt(0) : '';

    return (
        <>
            <div className="chats">
                <div className="d-flex flex-column justify-content-center text-center h-100 w-100">
                    <div className="container">
                        <div className="avatar bg-info text-light"><span>{firstAlphabet}</span></div>

                        <h5>Welcome, {user}!</h5>
                        <p className="text-muted">Please select a chat to Start messaging.</p>

                        <button className="btn btn-outline-primary no-box-shadow" type="button" onClick={() => sendData("clicked")}>
                            Start a conversation
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DefaultMessage;