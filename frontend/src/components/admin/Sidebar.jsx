
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Auths/AuthContex";
import "../../assets/css/sidebar.css"; // Import the sidebar CSS

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { state } = useAuth();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {isMobile && (
          // Mobile view: show the hamburger (close) button inside the sidebar
          <button className="sidebar-close" onClick={toggleSidebar} title="Close Sidebar">
            &times;
          </button>
        )}
        <div className="sidebar-header">
          <h2>Menu</h2>
          <p>Welcome, {state.name || "User"}</p>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" onClick={toggleSidebar}>
              <i className="bi bi-speedometer2"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={toggleSidebar}>
              <i className="bi bi-person"></i> Profile
            </Link>
          </li>
          <li>
            <Link to="/settings" onClick={toggleSidebar}>
              <i className="bi bi-gear"></i> Settings
            </Link>
          </li>
          <li>
            <Link to="/help" onClick={toggleSidebar}>
              <i className="bi bi-question-circle"></i> Help
            </Link>
          </li>
        </ul>
      </div>
      {!isMobile && (
        // PC view: show an arrow toggle button outside of the sidebar
        <button
          className="sidebar-toggle-arrow"
          onClick={toggleSidebar}
          title={isOpen ? "Hide Sidebar" : "Show Sidebar"}
        >
          <i className={`bi ${isOpen ? "bi-arrow-left-square" : "bi-arrow-right-square"}`}></i>
        </button>
      )}
    </>
  );
};

export default Sidebar;
