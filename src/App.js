import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import modules from "./modules"; // All the parent knows is that it has modules ...

export default function App() {
  console.log(modules);
  const [currentTab, setCurrentTab] = useState("dashboard");

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="App-nav">
            {modules.map(
              (
                module // with a name, and routes
              ) => (
                <li
                  key={module.name}
                  className={currentTab === module.name ? "active" : ""}
                >
                  <Link
                    to={module.routeProps.path}
                    onClick={() => setCurrentTab(module.name)}
                  >
                    {module.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </header>
        <div className="App-content">
          <Routes>
            {modules.map((module) => (
              <Route {...module.routeProps} key={module.name} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
