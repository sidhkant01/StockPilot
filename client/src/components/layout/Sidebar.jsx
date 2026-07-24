import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaTruck,
  FaShoppingCart,
  FaCashRegister,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>StockPilot</h2>
        <p>Inventory System</p>
      </div>

      <ul className="menu">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaBoxOpen />
            <span>Products</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/suppliers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaTruck />
            <span>Suppliers</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/purchases"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaShoppingCart />
            <span>Purchases</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/sales"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaCashRegister />
            <span>Sales</span>
          </NavLink>
        </li>
      </ul>

      <div className="logout-section">
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;