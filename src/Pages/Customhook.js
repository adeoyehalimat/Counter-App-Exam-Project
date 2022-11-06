import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import "../Assets/Customhook.css";
import "../Assets/counter.css";

function Counter(intialvalue) {
  // setting up of state
  const [value, setCount] = useState(intialvalue || 0);
  const Increment = () => setCount((intialvalue) => intialvalue + 1);
  const Decrement = () => setCount((intialvalue) => intialvalue - 1);
  const Setvalue = () => setCount(() => value * 2);
  const Reset = () => setCount((intialvalue = 0));

  return [value, Increment, Decrement, Setvalue, Reset];
}

function Customhook() {
  const [value, Increment, Decrement, Setvalue, Reset] = Counter(0);

  if (value === -1) {
    throw new Error("refresh and do increment");
  }
  return (
    <>
     
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          }
          className="navigate"
          to="/"
        >
          {" "}
          Custom Hook Counter{" "}
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          }
          className="navigate"
          to="/about"
        >
          {" "}
          Use Reducer Counter{" "}
        </NavLink>
        
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          }
          className="navigate"
          to="/*"
        >
          {" "}
          
         Try again {" "}
        </NavLink>
      
      <section className="navigation">
        {" "}
        <h1> Custom Hook Counter</h1>
        <div className="Counter-label"> Count :{value}</div>
        <button className="action-btn" onClick={Increment}>
          Increment{" "}
        </button>
        <button className="action-btn" onClick={Decrement}>
          Decrement{" "}
        </button>
        <button className="action-btn" onClick={Setvalue}>
          Setvalue{" "}
        </button>
        <button className="action-btn" onClick={Reset}>
          Reset{" "}
        </button>
       
        
      </section>
    </>
  );
}

export default Customhook;
