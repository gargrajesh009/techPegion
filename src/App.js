import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

const App =()=> {
    return (
      <div>
        <NavBar />
        <Routes>
        <Route
            path="/"
            element={<News key="home" category="general" />}
          />
          <Route
            path="/business"
            element={<News key="business" category="business" />}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" category="entertainment" />}
          />
          <Route
            path="/general"
            element={<News key="general" category="general" />}
          />
          <Route
            path="/health"
            element={<News key="health" category="health" />}
          />
          <Route
            path="/science"
            element={<News key="science" category="science" />}
          />
          <Route
            path="/sports"
            element={<News key="sports" category="sports" />}
          />
          <Route
            path="/technology"
            element={<News key="technology" category="technology" />}
          />
        </Routes>
      </div>
    );
}

export default App
