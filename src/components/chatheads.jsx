function Chatheads({userType}) {
    return (
        <>
            {userType == 1 && (
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
                                                    <a className="nav-link text-muted px-1" href="#"
                                                       title="Notifications" role="button" data-toggle="modal"
                                                       data-target="#notificationModal">
                                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                             stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"
                                                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="contacts-list" id="chatContactTab" data-chat-list="">
                                        <li className="contacts-item friends">
                                            <a className="contacts-link" href="chat-1.html">
                                                <div className="avatar bg-info text-light">
                                                    <span>M</span>
                                                </div>
                                                <div className="contacts-content">
                                                    <div className="contacts-info">
                                                        <h6 className="chat-name text-truncate">Catherine
                                                            Richardson</h6>
                                                        <div className="chat-time">Just now</div>
                                                    </div>
                                                    <div className="contacts-texts">
                                                        <p className="text-truncate">I’m sorry, I didn’t catch that.
                                                            Could you please repeat?</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </aside>
            )}
        </>
    )
}

export default Chatheads