import React, { useState } from "react";

const SESSIONS = [
  "WinUpdate June 2025 Fr2vis47",
  "WinUpdate May 2025 Fr2vis47",
  "WinUpdate April 2025 Fr2vis47"
];
const STATES = [
  { label: "InstallComplete", color: "#c7f5c2" },
  { label: "None", color: "#fff" },
  { label: "WaitInstall", color: "#ffe4b2" },
  { label: "Verifying", color: "#ffe0f0" },
  { label: "Installing", color: "#ffe4b2" },
  { label: "PendingSoftReboot", color: "#fff5b2" },
  { label: "All", color: "#e4e9f7" }
];
const SERVERS = [
  {
    name: "fr2vis47b.hq.ivalua.com (Up) | 26",
    logs: [
      "Security Update for the remote code execution vulnerability in Microsoft Visual Studio 2015 update 3 (KB5001971) - InstallComplete - 2024-06-17 09:54:48",
      "2024-06 Servicing Stack Update for Windows Server 2016 for x64-based Systems (KB5001078) - InstallComplete - 2024-06-17 09:54:48",
      "2024-06 Cumulative Update for Windows Server 2016 for x64-based Systems (KB5003638) - InstallComplete - 2024-06-17 09:54:48"
    ]
  },
  {
    name: "fr2vis47f.hq.ivalua.com (Up) | 25",
    logs: [
      "2024-06 Security Update for server platform (KB5001971) - InstallComplete - 2024-06-17 09:54:48",
      "2024-06 Servicing Stack Update for Windows Server 2016 for x64-based Systems (KB5001078) - InstallComplete - 2024-06-17 09:54:48",
      "2024-06 Cumulative Update for Windows Server 2016 for x64-based Systems (KB5003638) - InstallComplete - 2024-06-17 09:54:48"
    ]
  },
  {
    name: "fr2vis47s.hq.ivalua.com (Up) | 21",
    logs: [
      "2024-06 Security Update for server platform (KB5001971) - InstallComplete - 2024-06-17 09:54:48",
      "2024-06 Servicing Stack Update for Windows Server 2016 for x64-based Systems (KB5001078) - InstallComplete - 2024-06-17 09:54:48",
      "2024-06 Cumulative Update for Windows Server 2016 for x64-based Systems (KB5003638) - InstallComplete - 2024-06-17 09:54:48"
    ]
  }
];

export default function ManageServerGroup() {
  const [selectedSession, setSelectedSession] = useState(SESSIONS[0]);
  const [selectedStates, setSelectedStates] = useState(["InstallComplete"]);

  const handleStateChange = (e) => {
    const options = Array.from(e.target.options);
    setSelectedStates(options.filter(o => o.selected).map(o => o.value));
  };

  return (
    <div className="update-session-container">
      <div className="form-group">
        <label className="form-label" htmlFor="session-select">Select Session</label>
        <select
          id="session-select"
          className="form-input"
          value={selectedSession}
          onChange={e => setSelectedSession(e.target.value)}
        >
          {SESSIONS.map(session => (
            <option key={session} value={session}>{session}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="state-select">
          Select States <span style={{ fontWeight: 400, fontSize: "0.95em" }}>(use Ctrl for Multiple Choice)</span>
        </label>
        <select
          id="state-select"
          className="form-input state-multiselect"
          multiple
          size={STATES.length}
          value={selectedStates}
          onChange={handleStateChange}
        >
          {STATES.map(state => (
            <option
              key={state.label}
              value={state.label}
              className={state.label}
            >
              {state.label}
            </option>

          ))}
        </select>
      </div>
      <div className="button-row">
        <button className="primary-btn small-btn success-btn">
          <i className="bx bx-play-circle"></i>
          Start Session
        </button>
        <button className="primary-btn secondary-btn small-btn">
          <i className="bx bx-refresh"></i>
          Refresh
        </button>
        <button className="primary-btn small-btn">
          <i className="bx bx-cloud-upload"></i>
          Install Update
        </button>
        <button className="primary-btn danger-btn small-btn">
          <i className="bx bx-power-off"></i>
          Reboot All Servers
        </button>
      </div>
      <div className="server-status-list">
        {SERVERS.map(server => (
          <div className="server-status-panel" key={server.name}>
            <div className="server-status-header">{server.name}</div>
            <ul className="server-log-list">
              {server.logs.map((log, i) => (
                <li key={i} className="server-log-entry">{log}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
