import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Chatheads({ userType, receiverID }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchChats = () => {
            axios.get("api/fetch_chats.php", { withCredentials: true })
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
                                                          data-target="#notificationModal"
                                                          onClick={() => {
                                                              const mainTag = document.querySelector("main");
                                                              if (mainTag) {
                                                                  mainTag.classList.remove("main-visible");
                                                              }
                                                          }}>
                                                        <svg className="hw-24" fill="none" viewBox="0 0 24 24"
                                                             stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"
                                                                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
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
                                                    <Link className="contacts-link" to="" onClick={() => {
                                                        receiverID(chat.sender_id, chat.name); // Existing function call

                                                        // Add "main-visible" class back to <main> tag
                                                        const mainTag = document.querySelector("main");
                                                        if (mainTag) {
                                                            mainTag.classList.add("main-visible");
                                                        }
                                                    }}>
                                                        <div className="avatar bg-info text-light">
                                                            <span>{chat.name.charAt(0)}</span>
                                                        </div>
                                                        <div className="contacts-content">
                                                            <div className="contacts-info">
                                                                <h6 className="chat-name text-truncate">{chat.name}</h6>
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
