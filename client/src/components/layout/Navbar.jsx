import { useEffect, useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const date = now.toLocaleDateString("en-IN", options);

      const time = now.toLocaleTimeString("en-IN");

      setCurrentTime(`${date} | ${time}`);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbar">

      <div className="navbar-left">
        <h3>Dashboard</h3>
        <p>Welcome back, {user?.name || "Admin"} 👋</p>
      </div>

      <div className="navbar-right">

        <div className="datetime">
          {currentTime}
        </div>

        <div className="notification">
          <FaBell />
        </div>

        <div className="profile">
          <FaUserCircle size={32} />
          <span>{user?.name || "Admin"}</span>
        </div>

      </div>

    </div>
  );
}

export default Navbar;