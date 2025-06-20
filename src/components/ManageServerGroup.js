import React, { useState } from "react";

const servers = [
  {
    name: "fr2vis47b.ho.ivalua.com",
    os: "Windows",
    status: "Online",
    ip: "10.0.0.1",
    updates: 5,
    users: 12,
    load: "Low",
    ram: 62,
    cpu: 28,
  },
  {
    name: "fr2vis47f.ho.ivalua.com",
    os: "Windows",
    status: "Online",
    ip: "10.0.0.2",
    updates: 2,
    users: 8,
    load: "Medium",
    ram: 45,
    cpu: 49,
  },
  {
    name: "fr2vis47s.ho.ivalua.com",
    os: "Linux",
    status: "Offline",
    ip: "10.0.0.3",
    updates: 7,
    users: 4,
    load: "High",
    ram: 81,
    cpu: 91,
  }
];

const osIcons = {
  Windows: <i className="bx bxl-windows os-icon" title="Windows"></i>,
  Linux: <i className="bx bxl-linux os-icon" title="Linux"></i>,
};

export default function ManageServerGroup() {
  const [selected, setSelected] = useState(servers[0]);

  const total = servers.length;
  const online = servers.filter(s => s.status === "Online").length;
  const offline = servers.filter(s => s.status === "Offline").length;
  const avgCpu = Math.round(servers.reduce((a, s) => a + s.cpu, 0) / total);
  const avgRam = Math.round(servers.reduce((a, s) => a + s.ram, 0) / total);

  return (
    <div className="update-session-container">
      {/* Title at the very top */}
      <div className="update-session-title">Manage Server Group</div>

      {/* Info Cards Row */}
      <div className="dashboard-info-cards">
        <div className="info-card">
          <i className="bx bx-server info-icon"></i>
          <div>
            <div className="info-title">Total Servers</div>
            <div className="info-value">{total}</div>
          </div>
        </div>
        <div className="info-card">
          <i className="bx bx-check-circle info-icon" style={{color: "var(--success-color)"}}></i>
          <div>
            <div className="info-title">Online</div>
            <div className="info-value">{online}</div>
          </div>
        </div>
        <div className="info-card">
          <i className="bx bx-error-circle info-icon" style={{color: "#f44336"}}></i>
          <div>
            <div className="info-title">Offline</div>
            <div className="info-value">{offline}</div>
          </div>
        </div>
        <div className="info-card">
          <i className="bx bx-chip info-icon" style={{color: "var(--primary-color)"}}></i>
          <div>
            <div className="info-title">Avg CPU</div>
            <div className="info-value">{avgCpu}%</div>
          </div>
        </div>
        <div className="info-card">
          <i className="bx bx-memory-card info-icon" style={{color: "#695cfe"}}></i>
          <div>
            <div className="info-title">Avg RAM</div>
            <div className="info-value">{avgRam}%</div>
          </div>
        </div>
      </div>

      {/* Existing Server Selection and Card */}
      <div className="form-group">
        <label htmlFor="server-select" className="form-label">
          Select Server
        </label>
        <select
          id="server-select"
          className="form-input"
          value={selected.name}
          onChange={e =>
            setSelected(servers.find(s => s.name === e.target.value))
          }
        >
          {servers.map(server => (
            <option key={server.name} value={server.name}>
              {server.name}
            </option>
          ))}
        </select>
      </div>
      <div className="server-dashboard-card">
        <div className="server-dashboard-header">
          <i className="bx bx-server server-icon"></i>
          <span className="server-name">{selected.name}</span>
          {osIcons[selected.os]}
        </div>
        <div className="server-dashboard-details">
          <div>
            <span className="server-label">Status:</span>
            <span className={`server-status ${selected.status.toLowerCase()}`}>
              {selected.status}
            </span>
          </div>
          <div>
            <span className="server-label">IP:</span>
            <span>{selected.ip}</span>
          </div>
          <div>
            <span className="server-label">Updates:</span>
            <span>{selected.updates}</span>
          </div>
          <div>
            <span className="server-label">Users:</span>
            <span>{selected.users}</span>
          </div>
          <div>
            <span className="server-label">Load:</span>
            <span>{selected.load}</span>
          </div>
        </div>
        <div className="resource-usage-row">
          <div className="resource-usage">
            <i className="bx bx-memory-card resource-icon"></i>
            <span>RAM</span>
            <span className="resource-bar">
              <span
                className="resource-bar-fill"
                style={{ width: `${selected.ram}%` }}
              ></span>
            </span>
            <span className="resource-value">{selected.ram}%</span>
          </div>
          <div className="resource-usage">
            <i className="bx bx-chip resource-icon"></i>
            <span>CPU</span>
            <span className="resource-bar">
              <span
                className="resource-bar-fill cpu"
                style={{ width: `${selected.cpu}%` }}
              ></span>
            </span>
            <span className="resource-value">{selected.cpu}%</span>
          </div>
        </div>
        <div className="button-row">
          <button className="primary-btn small-btn" title="Reboot">
            <i className="bx bx-refresh"></i> Reboot
          </button>
          <button className="primary-btn small-btn success-btn" title="Run">
            <i className="bx bx-play-circle"></i> Run
          </button>
          <button className="primary-btn danger-btn small-btn" title="Shutdown">
            <i className="bx bx-power-off"></i> Shutdown
          </button>
        </div>
      </div>
    </div>
  );
}
