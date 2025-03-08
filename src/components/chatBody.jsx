import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

function ChatBody({ userType, receiverId, receiverName }) {
    const messagesEndRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [msg, setMsg] = useState('');
    const [user, setUser] = useState('');
    const [userName, setuserName] = useState('');

    // Auto-scroll to the latest message
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, receiverId]); // Runs when messages update or receiverId changes

    useEffect(() => {
        const fetchChats = () => {
            axios
                .get(`fetch_message.php?receiverId=${receiverId}`, { withCredentials: true })
                .then((response) => {
                    if (Array.isArray(response.data)) {
                        setMessages(response.data);
                    } else {
                        console.error("Invalid response format:", response.data);
                    }
                })
                .catch((error) => console.error("Error fetching chats:", error));
        };

        fetchChats();
        const intervalId = setInterval(fetchChats, 5000); // Auto-refresh every 5 sec

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [receiverId]);

    const sendMessage = (e) => {
        if (e) e.preventDefault(); // Prevent form submission if event exists

        if (!msg.trim()) return; // Prevent sending empty messages

        const url = "/send_message.php";
        let fData = new FormData();
        fData.append("msg", msg);
        fData.append("receiver", receiverId);

        axios
            .post(url, fData)
            .then((response) => {
                if (response.data.status === "Success") {
                    setMsg(""); // Clear the input after successful send
                } else {
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Network error occurred");
            });
    };

    const fetchUser = () =>{
        axios
            .get(`fetch_user.php`, { withCredentials: true })
            .then((response) => {
                if(response.data.status === 'Success'){
                    setUser(response.data.userId);
                    setuserName(response.data.userName);
                }
                else{
                    alert(response.data.message);
                }
            })
            .catch((error) => console.error("Error fetching chats:", error));
    };

    fetchUser();

    return (
        <div className="chats">
            <div className="chat-body">
                <div className="chat-header">/
                    <button
                        className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none"
                        type="button"
                        data-close=""
                    >
                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                    </button>

                    {userType === "0" && (
                        <div className="media chat-name align-items-center text-truncate">
                            <div className="avatar bg-info text-light">
                                <span>A</span>
                            </div>
                            <div className="media-body align-self-center ml-3">
                                <h6 className="text-truncate mb-0">Admin</h6>
                                <small className="text-muted">Online</small>
                            </div>
                        </div>
                    )}

                    {userType === "1" && (
                        <div className="media chat-name align-items-center text-truncate">
                            <div className="avatar bg-info text-light">
                                <span>{receiverName.charAt(0)}</span>
                            </div>
                            <div className="media-body align-self-center ml-3">
                                <h6 className="text-truncate mb-0">{receiverName}</h6>
                            </div>
                        </div>
                    )}
                </div>

                <div className="chat-content p-2" id="messageBody">
                    <div className="container">
                        <div className="message-day">
                            {messages.length === 0 ? (
                                <p style={{color: "white"}}>No messages yet!</p>
                            ) : (
                                messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`message ${msg.sender_id === user ? "self" : ""}`}
                                    >
                                        <div className="message-wrapper">
                                            <div className="message-content">
                                                <span>{msg.message}</span>
                                            </div>
                                        </div>
                                        <div className="message-options">
                                            <div className="avatar bg-info text-light">
                                                { (msg.sender_id === user) ? (
                                                    <span>{userName.charAt(0)}</span>
                                                ) : (
                                                    <span>{receiverName.charAt(0)}</span>
                                                )
                                                }

                                            </div>
                                            <span className="message-date">
                                                {new Date(msg.inserted_at.replace(" ", "T")).toLocaleString("en-US", {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    hour12: true,
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                }).replace(",", "")}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Invisible div for auto-scrolling */}
                    <div ref={messagesEndRef}></div>
                </div>
                <form onSubmit={sendMessage}>
                    <div className="chat-footer">
                        {/* Attachment Button */}
                        <div className="attachment">
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary btn-icon btn-minimal btn-sm"
                                    type="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Message Input */}
                        <textarea
                            className="form-control emojionearea-form-control"
                            id="messageInput"
                            rows="1"
                            style={{color: "#fff"}}
                            placeholder="Type your message here..."
                            name="message"
                            required
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault(); // Prevents newline
                                    sendMessage(); // Sends the message
                                }
                            }}
                        ></textarea>

                        {/* Send Button */}
                        <div
                            className="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1"
                            role="button"
                            onClick={sendMessage}
                        >
                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChatBody;
