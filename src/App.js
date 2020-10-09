import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import SearchResults from "./components/SearchResults";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <SearchResults></SearchResults>
      </div>
    </>
  );
}

export default App;
