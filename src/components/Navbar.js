
import React from "react";
import PropTypes from "prop-types"; // Imported prop types


export default function Navbar(props) {
  // passing the props
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>{" "}
        {/* Using the curle braces to pass the title using props */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                {props.AboutText}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/TextForm">
                {props.TextForm}
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          </div>
          {/* <div className="form-check">
                <input className={`form-check-input text-red`} onClick={props.greenColor} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                <label className="form-check-label" htmlFor="exampleRadios1">
                 Green
                </label>
            </div>
            <div className="form-check">
                 <input className="form-check-input" onClick={props.redColor} type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                 <label className="form-check-label" htmlFor="exampleRadios2">
                  Red
                       </label>
            </div> */}
          <div className= {`form-check form-switch mx-1 text-${(props.mode)==='dark'?"light":"dark"} flex mx-2`} >
             <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
             <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{(props.mode)==='dark'?"Dark":"Light"}</label>   
         </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit"> 
              Search
            </button>

          </form>
        </div>
      </div>
    </nav>
  );
}  

Navbar.propTypes = { 
  title: PropTypes.string.isRequired, // PropTypes.string : it will make sure that string value is passed in tittle and isRequired means necessary to pass props value.  
  AboutText: PropTypes.string 
};

//defaultProps: if nothing is passed what value to be passed 
Navbar.defaultProps={ // These will be the default props value if nothing is passed.
  title: "Type your title", 
  AboutText: 'About title' 
};

