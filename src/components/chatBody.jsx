import React, {useRef, useEffect, useState} from "react";
import axios from "axios";

function ChatBody({ userType, receiverId, receiverName }) {
    const messagesEndRef = useRef(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    }, [userType]);

    useEffect(() => {
        const fetchChats = () => {
            console.log(`fetching chat ${receiverId}`);
            // Append the userId as a query parameter in the GET request
            axios.get(`fetch_chats.php?receiverId=${receiverId}`, { withCredentials: true })
                .then((response) => {
                    if (Array.isArray(response.data)) {
                        setMessages(response.data);
                        console.log(messages);
                    } else {
                        console.error("Invalid response format:", response.data);
                    }
                })
                .catch((error) => console.error("Error fetching chats:", error));
        };

        fetchChats();
        const intervalId = setInterval(fetchChats, 5000); // Fetch data every 5 seconds

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [receiverId]);

    return (
        <>
            <div className="chats">
                <div className="chat-body">
                    <div className="chat-header">
                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none"
                                type="button" data-close="">
                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                            </svg>
                        </button>

                        {userType === '0' && (
                            <div className="media chat-name align-items-center text-truncate">
                                <div className="avatar bg-info text-light"><span>A</span></div>
                                <div className="media-body align-self-center ml-3">
                                    <h6 className="text-truncate mb-0">Admin</h6>
                                    <small className="text-muted">Online</small>
                                </div>
                            </div>
                        )}

                        {userType === '1' && (
                            <div className="media chat-name align-items-center text-truncate">
                                <div className="avatar bg-info text-light"><span>U</span></div>
                                <div className="media-body align-self-center ml-3">
                                    <h6 className="text-truncate mb-0">{receiverName}</h6>
                                    <small className="text-muted">Online</small>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Step 3: Attach the ref to the scrollable container */}
                    <div className="chat-content p-2" id="messageBody" ref={messagesEndRef}>
                        <div className="container">
                            <div className="message-day">
                                {messages.length <= 0 ? (
                                    <p>No messages yet!</p>
                                ) : (
                                    messages.map((msg) => (
                                            <div className="message">
                                                <div className="message-wrapper">
                                                    <div className="message-content">
                                                        <span>{msg.message}</span>
                                                    </div>
                                                </div>
                                                <div className="message-options">
                                                    <div className="avatar bg-info text-light"><span>{receiverName.charAt(0)}</span></div>
                                                    <span className="message-date">9:12am</span>
                                                </div>
                                            </div>
                                    ))
                                )}

                            </div>
                        </div>

                        <div className="chat-finished" id="chat-finished"></div>
                        <div ref={messagesEndRef}></div>
                    </div>

                    <div className="chat-footer">
                        <div className="attachment">
                            <div className="dropdown">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm" type="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                        <span>Gallery</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                                        </svg>
                                        <span>Audio</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                        </svg>

                                        <span>Document</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                        </svg>

                                        <span>Contact</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        <span>Location</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                        <span>Poll</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <textarea className="form-control emojionearea-form-control" id="messageInput" rows="1"
                                  placeholder="Type your message here..."></textarea>
                        <div className="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1"
                             role="button">
                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ChatBody