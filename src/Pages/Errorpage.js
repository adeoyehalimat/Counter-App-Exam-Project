import React from "react";
import "../Assets/counter.css";
import { NavLink } from "react-router-dom";





  function Error (){
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
     
      <div>
       
        <h1>404 page</h1>
       
      </div>
      
    {/* <NavLink
      style={({ isActive }) =>
        isActive ? { color: "red" } : { color: "black" }
      }
      className="navigate"
      to="/*"
    >
      {" "}
      Try again{" "}
    </NavLink> */}
    </>
    );
  }
  export default Error;