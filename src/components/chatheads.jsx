import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Chatheads({ userType, receiverID }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchChats = () => {
            axios.get("fetch_chats.php", { withCredentials: true })
                .then((response) => {
                    if (Array.isArray(response.data)) {
                        setData(response.data);
                    } else {
                        console.error("Invalid response format:", response.data);
                    }
                })
                .catch((error) => console.error("Error fetching chats:", error));
        };

        fetchChats();
        const intervalId = setInterval(fetchChats, 5000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            {userType === '1' && (
                <aside className="sidebar">
                    <div className="tab-content">
                        <div className="tab-pane active" id="chats-content">
                            <div className="d-flex flex-column h-100">
                                <div className="hide-scrollbar h-100" id="chatContactsList">
                                    <div className="sidebar-header sticky-top p-2">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="font-weight-semibold mb-0">Chats</h5>
                                            <ul className="nav flex-nowrap">
                                                <li className="nav-item list-inline-item mr-1">
                                                    <Link className="nav-link text-muted px-1" to=""
                                                          title="Notifications" role="button" data-toggle="modal"
                                                          data-target="#notificationModal">
                                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                             stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"
                                                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                                        </svg>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {data.length === 0 ? (
                                        <p>No Message Found</p>
                                    ) : (
                                        <ul className="contacts-list" id="chatContactTab" data-chat-list="">
                                            {data.map((chat) => (
                                                <li className="contacts-item friends" key={chat.msg_id}>
                                                    {/* Corrected onClick */}
                                                    <Link className="contacts-link" to="" onClick={() => receiverID(chat.sender_id, chat.name)}>
                                                        <div className="avatar bg-info text-light">
                                                            <span>{chat.name.charAt(0)}</span>
                                                        </div>
                                                        <div className="contacts-content">
                                                            <div className="contacts-info">
                                                                <h6 className="chat-name text-truncate">{chat.name}</h6>
                                                                <div className="chat-time">Just now</div>
                                                            </div>
                                                            <div className="contacts-texts">
                                                                <p className="text-truncate">{chat.message}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            )}
        </>
    );
}

export default Chatheads;
