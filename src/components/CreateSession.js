import React, { useState } from "react";

const SERVER_GROUPS = [
  {
    name: "fr2vis47 server",
    servers: [
      "fr2vis47b.ho.ivalua.com",
      "fr2vis47f.ho.ivalua.com",
      "fr2vis47s.ho.ivalua.com"
    ]
  },
];

export default function ManageServerGroup() {
  const [selectedGroup, setSelectedGroup] = useState(SERVER_GROUPS[0]);
  const [sessionName, setSessionName] = useState("");
  const [selectedServers, setSelectedServers] = useState([]);

  const handleGroupChange = (e) => {
    const group = SERVER_GROUPS.find(g => g.name === e.target.value);
    setSelectedGroup(group);
    setSelectedServers([]);
  };

  const handleServerClick = (server) => {
    setSelectedServers((prev) =>
      prev.includes(server)
        ? prev.filter(s => s !== server)
        : [...prev, server]
    );
  };

  return (
    <div className="update-session-container">
      <h2 className="update-session-title">Server Update Session</h2>
      <div className="form-group">
        <label htmlFor="server-group" className="form-label">Select Server Group</label>
        <select
          id="server-group"
          className="form-input"
          value={selectedGroup.name}
          onChange={handleGroupChange}
        >
          {SERVER_GROUPS.map(group => (
            <option key={group.name} value={group.name}>
              {group.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="session-name" className="form-label">Update Session Name</label>
        <input
          id="session-name"
          className="form-input"
          type="text"
          placeholder="Enter session name"
          value={sessionName}
          onChange={e => setSessionName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">
          Servers in {selectedGroup.name}
        </label>
        <div className="server-list">
          {selectedGroup.servers.map(server => (
            <div
              key={server}
              className={`server-tile${selectedServers.includes(server) ? " selected" : ""}`}
              onClick={() => handleServerClick(server)}
            >
              {server}
            </div>
          ))}
        </div>
      </div>
      <button className="primary-btn" type="button">
        Start Update Session
      </button>
    </div>
  );
}
