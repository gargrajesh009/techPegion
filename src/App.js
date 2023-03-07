import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/business" element={<News category="business" />} />
            <Route
              path="/entertainment"
              element={<News category="entertainment" />}
            />
            <Route path="/general" element={<News category="general" />} />
            <Route path="/health" element={<News category="health" />} />
            <Route path="/science" element={<News category="science" />} />
            <Route path="/sports" element={<News category="sports" />} />
            <Route
              path="/technology"
              element={<News category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
