import React, { useState, useEffect } from "react";
import "../style.css";
import avatar from '../assets/images/avatar.jpeg';

function Menu({ activePage, setActivePage }) {
  const [sidebarClosed, setSidebarClosed] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => setSidebarClosed((prev) => !prev);
  const handleModeSwitch = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [darkMode]);

  const menuItems = [
    {
      key: "manage",
      icon: "bx bx-cog",
      label: "Manage Server Group",
    },
    {
      key: "create",
      icon: "bx bx-plus",
      label: "Create Session",
    },
    {
      key: "update",
      icon: "bx bx-refresh",
      label: "Update Status",
    },
  ];

  return (
    <nav className={`sidebar${sidebarClosed ? " close" : ""}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={avatar} alt="JR" />
          </span>
          <div className="text logo-text">
            <span className="name">Jérôme Richard</span>
            <span className="status">Online</span>
          </div>
        </div>
        <i className="bx bx-chevron-right toggle" onClick={handleToggle}></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={`nav-link${activePage === item.key ? " active" : ""}`}
                onClick={() => setActivePage(item.key)}
              >
                <a href="#">
                  <i className={`${item.icon} icon`}></i>
                  <span className="text nav-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom-content">
          <li>
            <a href="#">
              <i className="bx bx-info-circle icon"></i>
              <span className="text nav-text">About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>
          <li className="mode" onClick={handleModeSwitch}>
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">
              {darkMode ? "Light mode" : "Dark mode"}
            </span>
            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
