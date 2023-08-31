import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = (props) => {


  const Changecolorwhileonclick = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "red" : "#282c34",
      // backgroundColor: isActive ? 'pink':'light',
      textDecoration: isActive ? "underline" : "none",
    };
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="heading">Movies</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav  mb-2  mx-auto me-auto mb-lg-0">
            <li className="nav-item ml-3">
              <NavLink style={Changecolorwhileonclick} to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink style={Changecolorwhileonclick} to="/Blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item ml-3">
              <NavLink style={Changecolorwhileonclick} to="/Aboutus">
                About us
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink style={Changecolorwhileonclick} to="/Contactus">
                Contact us
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 mr-5 my-lg-0" >
            <input className="form-control mr-sm-2" type="search" placeholder="Search..." value={props.firstvalue} onChange={(e) => props.setfirstvalue(e.target.value)} />
            <button className="btn btn-danger my-2 my-sm-0" type="submit" onClick={props.clicktosubmit}>Search</button>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
