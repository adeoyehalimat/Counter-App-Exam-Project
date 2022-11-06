import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
// import "../Assets/Countreducer.css";
import "../Assets/counter.css";
// create useReducer
function Appcounter(InitialValue = 0, action) {
  if (action === "Increment") {
    return InitialValue + 1;
  } else if (action === "Decrement") {
    return InitialValue - 1;
  } else if (action === "Setvalue") {
    return InitialValue * 2;
  } else if (action === "Reset") {
    return 0;
  } else if (InitialValue === -1) {
    return Error("does not exist");
  } else {
    return InitialValue;
  }
}

// implementin useReducer in the root component
function Countreducer() {
  const [value, dispatch] = useReducer(Appcounter, 0);
  if (value === -1) {
    throw new Error(" refresh and do increment");
  }

  return (
    <>
    <NavLink
          style={({ isActive }) =>
            isActive ? { color: "indigo" } : { color: "black" }
          }
          className="navigate"
          to="/"
        >
          {" "}
          Custom Hook Counter
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "indigo" } : { color: "black" }
          }
          className="navigate"
          to="/about"
        >
          {" "}
          Use Reducer Counter
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          }
          className="navigate"
          to="/*"
        >
          {" "}
          Try again{" "}
        </NavLink>
      <section className="navigation">
        {" "}
        <h1> Use Reducer Counter</h1>
        <div className="Counter-label"> Count :{value}</div>
        <button onClick={() => dispatch("Increment")}>Increment </button>
        <button onClick={() => dispatch("Decrement")}>Decrement </button>
        <button onClick={() => dispatch("Setvalue")}>Setvalue </button>
        <button onClick={() => dispatch("Reset")}>Reset </button>
        
      </section>
    </>
  );
}

export default Countreducer;
