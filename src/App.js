import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Countreducer from "./Pages/Countreducer";
import Customhook from "./Pages/Customhook";
import Error from "./Pages/Errorpage";




class ErrorBoundary extends React.Component {
  state = { hasError: false, error: "" };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert">
          <h1>Something went wrong. {this.state.error}</h1>;
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <>
      <div className="header"> Counter App</div>

      <section className="container">
        <Routes>
          {" "}
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Customhook />{" "}
              </ErrorBoundary>
            }
          />
          <Route
            path="/about"
            element={
              <ErrorBoundary>
                <Countreducer />{" "}
              </ErrorBoundary> 
            }
          />
          <Route
            path="/*"
            element={
              <ErrorBoundary>
                <Error />{" "}
              </ErrorBoundary>
            }
          />
        </Routes>
      </section>
    </>
  );
}

export default App;
