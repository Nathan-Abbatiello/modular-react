import logo from "./logo.svg";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "./CSS/App.css";
import NavBar from "./Components/HTML Elements/NavBar.js";
import Content from "./Components/HTML Elements/Content.js";
import Map from "./Components/Map.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Map />
    </div>
  );

  // return (
  //       <Router>
  //         <div className="App">
  //           <header className="App-header">
  //             <img src={logo} className="App-logo" alt="logo" />
  //             <ul className="App-nav">
  //               {Names.map(module => (
  //                   <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
  //                     <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
  //                   </li>
  //               ))}
  //             </ul>
  //           </header>
  // <div className="App-content">
  //   {Names.map(module => (
  //     <Route {...module.routeProps} key={module.name} />
  //   ))}
  // </div>
  //         </div>
  //       </Router>
  //   );
}

export default App;
