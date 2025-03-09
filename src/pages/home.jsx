import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Chatheads from "../components/chatheads";
import LeftSideBar from "../components/leftSideBar";
import DefaultMessage from "../components/defaultMessage";
import ChatBody from "../components/chatBody";
import axios from "axios";
function Home() {
    const navigate = useNavigate();

    const [chatOpen, setChatOpen] = useState(false);
    const [error, setError] = useState(false);
    const [userName, setUserName] = useState('User');
    const [userType, setUserType] = useState('');
    const [receiverId, setReceiverId] = useState('');
    const [receiverName, setReceiverName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (!token) {
            navigate("/Login");
        }

    }, [navigate]);

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem("userToken");
            const response = await axios.get("/api/fetch_user_details.php", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.data.status === "Success") {
                setUserName(response.data.user_name);
                setUserType(response.data.user_type);
            } else {
                setError(response.data.message || "Failed to fetch status.");
                console.log(error);
            }
        } catch (err) {
            setError("Failed to fetch session data");
            console.error(err);
        }
    };

    fetchUserData();

    useEffect(() => {
        const savedChatOpen = localStorage.getItem("chatOpen");
        if (savedChatOpen === "true") {
            setChatOpen(true);  // Restore chatOpen state from localStorage
        }
    }, []);

    // Update state and persist it in localStorage when the chat opens
    const handleDataFromChild = (data) => {
        setChatOpen(true);
        localStorage.setItem("chatOpen", "true");  // Persist chatOpen state in localStorage
    };

    const handleReceiverId = (sData, name) => {
        setReceiverId(sData);
        setReceiverName(name);
        setChatOpen(true);
        localStorage.setItem("chatOpen", "true");
    };


    return (
        <div className="main-layout">
            {/*left sidebar component starts*/}
            <LeftSideBar/>
            {/*left sidebar component ends*/}

            {/*chats sidebar starts*/}
            <Chatheads userType={userType} receiverID={handleReceiverId}/>
            {/*chats sidebar ends*/}

            <main className="main main-visible">
                {/*default message area start*/}
                {
                    !chatOpen && (
                        <DefaultMessage user={userName} sendData={handleDataFromChild}/>
                    )
                }

                {/*default message area end*/}


                {/*chat page starts*/}
                {
                    chatOpen && (
                        <ChatBody userType={userType} receiverId={receiverId !== '' ? receiverId : 1} receiverName = {receiverName !== '' ? receiverName : 'Admin'}/>
                    )
                }

                {/*chat page ends*/}
            </main>

        </div>
    );
}

export default Home;