import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Send a logout request to the backend
            const response = await fetch("/user_logout.php", {
                method: "POST",
                credentials: "include",
            });
            if (response.ok) {
                localStorage.removeItem("userToken");
                alert('Logout Successful!');
                navigate("/Login");
            } else {
                // Handle backend errors
                const error = await response.json();
                console.error("Logout failed:", error.message);
                alert(error.message || "Failed to log out. Please try again.");
            }
        } catch (err) {
            console.error("An error occurred during logout:", err);
            alert("An error occurred. Please try again.");
        }
    };

    // Call handleLogout only once when the component mounts
    useEffect(() => {
        handleLogout();
    }, []); // Empty dependency array ensures this runs only once

    return (
        <></>
    );
}

export default Logout;