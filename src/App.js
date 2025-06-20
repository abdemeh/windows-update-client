import React, { useState } from "react";
import Menu from "./components/Menu";
import CreateSession from "./components/CreateSession";
import ManageServerGroup from "./components/ManageServerGroup";
import UpdateStatus from "./components/UpdateStatus";
import "./style.css";

function App() {
  const [activePage, setActivePage] = useState("manage");

  let PageComponent;
  if (activePage === "manage") PageComponent = <ManageServerGroup />;
  else if (activePage === "create") PageComponent = <CreateSession />;
  else if (activePage === "update") PageComponent = <UpdateStatus />;

  return (
    <>
      <Menu activePage={activePage} setActivePage={setActivePage} />
      <section className="home">
        {PageComponent}
      </section>
    </>
  );
}

export default App;
