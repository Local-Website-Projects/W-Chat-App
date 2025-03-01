function Chatheads() {
    return (
        <>
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
                                            <div className="avatar avatar-online bg-info text-light">
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
                                    <li className="contacts-item friends unread">
                                        <a className="contacts-link" href="#">
                                            <div className="avatar avatar-offline bg-info text-light">
                                                <span>E</span>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name">Eva Walker</h6>
                                                    <div className="chat-time">09:36 am</div>
                                                </div>
                                                <div className="contacts-texts">
                                                    <p className="text-truncate">You’re kidding! I drive a
                                                        motorcycle as well. What type of bike do you have?</p>
                                                    <div className="badge badge-rounded badge-primary ml-1">2</div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="calls-content">
                        <div className="d-flex flex-column h-100">
                            <div className="hide-scrollbar h-100" id="callContactsList">
                                <div className="sidebar-header sticky-top p-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="font-weight-semibold mb-0">Calls</h5>
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

                                            <li className="nav-item list-inline-item mr-0">
                                                <div className="dropdown">
                                                    <a className="nav-link text-muted px-1" href="#" role="button"
                                                       title="Details" data-toggle="dropdown" aria-haspopup="true"
                                                       aria-expanded="false">
                                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                             stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"
                                                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                                        </svg>
                                                    </a>

                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" role="button"
                                                           data-toggle="modal" data-target="#startConversation">New
                                                            Chat</a>
                                                        <a className="dropdown-item" href="#" role="button"
                                                           data-toggle="modal" data-target="#createGroup">Create
                                                            Group</a>
                                                        <a className="dropdown-item" href="#" role="button"
                                                           data-toggle="modal" data-target="#inviteOthers">Invite
                                                            Others</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-sub-header">
                                        <div className="dropdown mr-2">
                                            <button className="btn btn-outline-default dropdown-toggle"
                                                    type="button" data-chat-filter-list="" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                All Chats
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" data-chat-filter=""
                                                   data-select="all-chats" href="#">All Chats</a>
                                                <a className="dropdown-item" data-chat-filter=""
                                                   data-select="friends" href="#">Friends</a>
                                                <a className="dropdown-item" data-chat-filter=""
                                                   data-select="groups" href="#">Groups</a>
                                                <a className="dropdown-item" data-chat-filter=""
                                                   data-select="unread" href="#">Unread</a>
                                                <a className="dropdown-item" data-chat-filter=""
                                                   data-select="archived" href="#">Archived</a>
                                            </div>
                                        </div>
                                        <form className="form-inline">
                                            <div className="input-group">
                                                <input type="text"
                                                       className="form-control search border-right-0 transparent-bg pr-0"
                                                       placeholder="Search users"/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text transparent-bg border-left-0"
                                                         role="button">
                                                        <svg className="text-muted hw-20" fill="none"
                                                             viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"
                                                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>


                                <ul className="contacts-list" id="callLogTab" data-call-list="">
                                    <li className="contacts-item incoming active">
                                        <a href="#" className="media-link"></a>
                                        <div className="contacts-link">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/2.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Catherine
                                                        Richardson</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path
                                                            d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"/>
                                                        <path
                                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                    </svg>
                                                    <p className="text-muted mb-0">Just now</p>
                                                </div>
                                            </div>
                                            <div className="contacts-action">
                                                <button
                                                    className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                                    type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="contacts-item outgoing">
                                        <a href="#" className="media-link"></a>
                                        <div className="contacts-link outgoing">
                                            <div className="avatar bg-info text-light">
                                                <span>EW</span>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Eva Walker</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path
                                                            d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"/>
                                                        <path
                                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                    </svg>
                                                    <p className="text-muted mb-0">5 mins ago</p>
                                                </div>
                                            </div>
                                            <div className="contacts-action">
                                                <button
                                                    className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                                    type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="contacts-item missed">
                                        <a href="#" className="media-link"></a>
                                        <div className="contacts-link missed">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/3.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Christopher Garcia</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-danger mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path
                                                            d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"/>
                                                        <path
                                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                    </svg>
                                                    <p className="text-danger mb-0">20 mins ago</p>
                                                </div>
                                            </div>
                                            <div className="contacts-action">
                                                <button
                                                    className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                                    type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="contacts-item outgoing">
                                        <a href="#" className="media-link"></a>
                                        <div className="contacts-link outgoing">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/4.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Christina Turner</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path
                                                            d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"/>
                                                        <path
                                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                    </svg>
                                                    <p className="text-muted mb-0">4 hour ago</p>
                                                </div>
                                            </div>
                                            <div className="contacts-action">
                                                <button
                                                    className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                                    type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="contacts-item incoming">
                                        <a href="#" className="media-link"></a>
                                        <div className="contacts-link incoming">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/5.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Tammy Martinez</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path
                                                            d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"/>
                                                        <path
                                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                    </svg>

                                                    <p className="text-muted mb-0">Yesterday</p>
                                                </div>
                                            </div>
                                            <div className="contacts-action">
                                                <button
                                                    className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                                    type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="contacts-item incoming">
                                        <a href="#" className="media-link"></a>
                                        <div className="contacts-link incoming">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/6.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Bonnie Torres</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path
                                                            d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"/>
                                                        <path
                                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                    </svg>

                                                    <p className="text-muted mb-0">12/06/2020</p>
                                                </div>
                                            </div>
                                            <div className="contacts-action">
                                                <button
                                                    className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                                    type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="contacts-item outgoing">
                                        <a href="#" className="media-link"></a>
                                        <div className="contacts-link outgoing">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/7.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Jacqueline James</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path
                                                            d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"/>
                                                        <path
                                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                    </svg>
                                                    <p className="text-muted mb-0">16/05/2020</p>
                                                </div>
                                            </div>
                                            <div className="contacts-action">
                                                <button
                                                    className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                                    type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane" id="friends-content">
                        <div className="d-flex flex-column h-100">
                            <div className="hide-scrollbar" id="friendsList">
                                <div className="sidebar-header sticky-top p-2">

                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="font-weight-semibold mb-0">Friends</h5>

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

                                            <li className="nav-item list-inline-item mr-0">
                                                <div className="dropdown">
                                                    <a className="nav-link text-muted px-1" href="#" role="button"
                                                       title="Details" data-toggle="dropdown" aria-haspopup="true"
                                                       aria-expanded="false">
                                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                             stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"
                                                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                                        </svg>
                                                    </a>

                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" role="button"
                                                           data-toggle="modal" data-target="#startConversation">New
                                                            Chat</a>
                                                        <a className="dropdown-item" href="#" role="button"
                                                           data-toggle="modal" data-target="#createGroup">Create
                                                            Group</a>
                                                        <a className="dropdown-item" href="#" role="button"
                                                           data-toggle="modal" data-target="#inviteOthers">Invite
                                                            Others</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="sidebar-sub-header">

                                        <div className="dropdown mr-2">

                                            <button className="btn btn-outline-default dropdown-toggle"
                                                    type="button" data-chat-filter-list="" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                All Chats
                                            </button>


                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" data-chat-filter=""
                                                   data-select="all-chats" href="#">All Chats</a>
                                                <a className="dropdown-item" data-chat-filter=""
                                                   data-select="friends" href="#">Friends</a>
                                                <a className="dropdown-item" data-chat-filter=""
                                                   data-select="groups" href="#">Groups</a>
                                                <a className="dropdown-item" data-chat-filter=""
                                                   data-select="unread" href="#">Unread</a>
                                                <a className="dropdown-item" data-chat-filter=""
                                                   data-select="archived" href="#">Archived</a>
                                            </div>

                                        </div>


                                        <form className="form-inline">
                                            <div className="input-group">
                                                <input type="text"
                                                       className="form-control search border-right-0 transparent-bg pr-0"
                                                       placeholder="Search users"/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text transparent-bg border-left-0"
                                                         role="button">
                                                        <svg className="text-muted hw-20" fill="none"
                                                             viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"
                                                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                                        </svg>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <ul className="contacts-list" id="friendsTab" data-friends-list="">
                                    <li>
                                        <small className="font-weight-medium text-uppercase text-muted">A</small>
                                    </li>
                                    <li className="contacts-item active">
                                        <a className="contacts-link" href="#">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/3.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Albert K. Johansen</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <p className="text-muted mb-0">San Fransisco, CA</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="contacts-item">
                                        <a className="contacts-link" href="#">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/3.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Alice R. Botello</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <p className="text-muted mb-0">Brentwood, NY</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <small className="font-weight-medium text-uppercase text-muted">b</small>
                                    </li>
                                    <li className="contacts-item">
                                        <a className="contacts-link" href="#">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/3.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Brittany K.
                                                        Williams</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <p className="text-muted mb-0">Scranton, PA</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <small className="font-weight-medium text-uppercase text-muted">C</small>
                                    </li>
                                    <li className="contacts-item">
                                        <a className="contacts-link" href="#">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/3.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Christopher Garcia</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                              clip-rule="evenodd"/>
                                                    </svg>

                                                    <p className="text-muted mb-0">Riverside, CA</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="contacts-item">
                                        <a className="contacts-link" href="#">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/3.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Casey Mcbride</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                              clip-rule="evenodd"/>
                                                    </svg>

                                                    <p className="text-muted mb-0">Zephyr, NC</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <small className="font-weight-medium text-uppercase text-muted">G</small>
                                    </li>
                                    <li className="contacts-item">
                                        <a className="contacts-link" href="#">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/3.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Gemma Mendez</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                              clip-rule="evenodd"/>
                                                    </svg>

                                                    <p className="text-muted mb-0">Frederick, MD</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <small className="font-weight-medium text-uppercase text-muted">k</small>
                                    </li>
                                    <li className="contacts-item">
                                        <a className="contacts-link" href="#">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/3.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Katelyn Valdez</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                              clip-rule="evenodd"/>
                                                    </svg>

                                                    <p className="text-muted mb-0">Jackson, TN</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="contacts-item">
                                        <a className="contacts-link" href="#">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/3.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Katherine Schneider</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <p className="text-muted mb-0">Saginaw, MI</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <small className="font-weight-medium text-uppercase text-muted">m</small>
                                    </li>

                                    <li className="contacts-item">
                                        <a className="contacts-link" href="#">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/3.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Maizie Edwards</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <p className="text-muted mb-0">Greensboro, NC</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <small className="font-weight-medium text-uppercase text-muted">s</small>
                                    </li>

                                    <li className="contacts-item">
                                        <a className="contacts-link" href="#">
                                            <div className="avatar">
                                                <img src="../../assets/media/avatar/3.png" alt=""/>
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">Susan K. Taylor</h6>
                                                </div>
                                                <div className="contacts-texts">
                                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                                         fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <p className="text-muted mb-0">Centerville, VA</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="profile-content">
                        <div className="d-flex flex-column h-100">
                            <div className="hide-scrollbar">
                                <div className="sidebar-header sticky-top p-2 mb-3">
                                    <h5 className="font-weight-semibold">Profile</h5>
                                    <p className="text-muted mb-0">Personal Information & Settings</p>
                                </div>
                                <div className="container-xl">
                                    <div className="row">
                                        <div className="col">
                                            <div className="card card-body card-bg-5">
                                                <div className="d-flex flex-column align-items-center">
                                                    <div className="avatar avatar-lg mb-3">
                                                        <img className="avatar-img"
                                                             src="../../assets/media/avatar/3.png" alt=""/>
                                                    </div>

                                                    <div className="d-flex flex-column align-items-center">
                                                        <h5>Catherine Richardson</h5>
                                                    </div>

                                                    <div className="d-flex">
                                                        <button className="btn btn-outline-default mx-1"
                                                                type="button">
                                                            <svg className="hw-18 d-none d-sm-inline-block"
                                                                 fill="none" viewBox="0 0 24 24"
                                                                 stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                                                            </svg>
                                                            <span>Logout</span>
                                                        </button>
                                                        <button className="btn btn-outline-default mx-1 d-xl-none"
                                                                data-profile-edit="" type="button">
                                                            <svg className="hw-18 d-none d-sm-inline-block"
                                                                 fill="none" viewBox="0 0 24 24"
                                                                 stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                            </svg>

                                                            <span>Settings</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="card-options">
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted text-muted"
                                                            type="button" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                                                 stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                                            </svg>
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Change Profile
                                                                Picture</a>
                                                            <a className="dropdown-item" href="#">Change Number</a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="card mt-3">

                                                <ul className="list-group list-group-flush">


                                                    <li className="list-group-item py-2">
                                                        <div className="media align-items-center">
                                                            <div className="media-body">
                                                                <p className="small text-muted mb-0">Local Time</p>
                                                                <p className="mb-0">10:25 PM</p>
                                                            </div>
                                                            <svg className="text-muted hw-20 ml-1" fill="none"
                                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                            </svg>
                                                        </div>
                                                    </li>


                                                    <li className="list-group-item py-2">
                                                        <div className="media align-items-center">
                                                            <div className="media-body">
                                                                <p className="small text-muted mb-0">Birthdate</p>
                                                                <p className="mb-0">20/11/1992</p>
                                                            </div>
                                                            <svg className="text-muted hw-20 ml-1" fill="none"
                                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                            </svg>
                                                        </div>
                                                    </li>


                                                    <li className="list-group-item py-2">
                                                        <div className="media align-items-center">
                                                            <div className="media-body">
                                                                <p className="small text-muted mb-0">Phone</p>
                                                                <p className="mb-0">+01-222-364522</p>
                                                            </div>
                                                            <svg className="text-muted hw-20 ml-1" fill="none"
                                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                            </svg>
                                                        </div>
                                                    </li>


                                                    <li className="list-group-item py-2">
                                                        <div className="media align-items-center">
                                                            <div className="media-body">
                                                                <p className="small text-muted mb-0">Email</p>
                                                                <p className="mb-0">catherine.richardson@gmail.com</p>
                                                            </div>

                                                            <svg className="text-muted hw-20 ml-1" fill="none"
                                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                                            </svg>

                                                        </div>
                                                    </li>


                                                    <li className="list-group-item py-2">
                                                        <div className="media align-items-center">
                                                            <div className="media-body">
                                                                <p className="small text-muted mb-0">Website</p>
                                                                <p className="mb-0">www.catherichardson.com</p>
                                                            </div>
                                                            <svg className="text-muted hw-20 ml-1" fill="none"
                                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                            </svg>

                                                        </div>
                                                    </li>


                                                    <li className="list-group-item pt-2">
                                                        <div className="media align-items-center">
                                                            <div className="media-body">
                                                                <p className="small text-muted mb-0">Address</p>
                                                                <p className="mb-0">1134 Ridder Park Road, San
                                                                    Fransisco, CA 94851</p>
                                                            </div>
                                                            <svg className="text-muted hw-20 ml-1" fill="none"
                                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                                            </svg>

                                                        </div>
                                                    </li>


                                                </ul>


                                            </div>

                                            <div className="card my-3">

                                                <ul className="list-group list-group-flush">


                                                    <li className="list-group-item py-2">
                                                        <div className="media align-items-center">
                                                            <div className="media-body">
                                                                <p className="small text-muted mb-0">Facebook</p>
                                                                <a className="font-size-sm font-weight-medium"
                                                                   href="#">@cathe.richardson</a>
                                                            </div>
                                                            <svg className="text-muted hw-20 ml-1"
                                                                 viewBox="0 0 24 24" fill="none"
                                                                 stroke="currentColor" stroke-width="2"
                                                                 stroke-linecap="round" stroke-linejoin="round">
                                                                <path
                                                                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                                            </svg>
                                                        </div>
                                                    </li>


                                                    <li className="list-group-item py-2">
                                                        <div className="media align-items-center">
                                                            <div className="media-body">
                                                                <p className="small text-muted mb-0">Twitter</p>
                                                                <a className="font-size-sm font-weight-medium"
                                                                   href="#">@cathe.richardson</a>
                                                            </div>
                                                            <svg className="text-muted hw-20 ml-1"
                                                                 viewBox="0 0 24 24" fill="none"
                                                                 stroke="currentColor" stroke-width="2"
                                                                 stroke-linecap="round" stroke-linejoin="round">
                                                                <path
                                                                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                                                            </svg>
                                                        </div>
                                                    </li>


                                                    <li className="list-group-item py-2">
                                                        <div className="media align-items-center">
                                                            <div className="media-body">
                                                                <p className="small text-muted mb-0">Instagram</p>
                                                                <a className="font-size-sm font-weight-medium"
                                                                   href="#">@cathe.richardson</a>
                                                            </div>
                                                            <svg className="text-muted hw-20 ml-1"
                                                                 viewBox="0 0 24 24" fill="none"
                                                                 stroke="currentColor" stroke-width="2"
                                                                 stroke-linecap="round" stroke-linejoin="round">
                                                                <rect x="2" y="2" width="20" height="20" rx="5"
                                                                      ry="5"/>
                                                                <path
                                                                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                                            </svg>
                                                        </div>
                                                    </li>


                                                    <li className="list-group-item py-2">
                                                        <div className="media align-items-center">
                                                            <div className="media-body">
                                                                <p className="small text-muted mb-0">Linkedin</p>
                                                                <a className="font-size-sm font-weight-medium"
                                                                   href="#">@cathe.richardson</a>
                                                            </div>
                                                            <svg className="text-muted hw-20 ml-1"
                                                                 viewBox="0 0 24 24" fill="none"
                                                                 stroke="currentColor" stroke-width="2"
                                                                 stroke-linecap="round" stroke-linejoin="round">
                                                                <path
                                                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                                                <rect x="2" y="9" width="4" height="12"/>
                                                                <circle cx="4" cy="4" r="2"/>
                                                            </svg>
                                                        </div>
                                                    </li>


                                                </ul>


                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </aside>
        </>
    )
}

export default Chatheads