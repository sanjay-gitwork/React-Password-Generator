import React from "react";
import { Link } from "react-router-dom";
// import './TopNavigation.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// 
const TopNavigation = () => {
    return (

      
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container">
              <Link className="navbar-brand" to="/">𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭 𝓖𝓮𝓷𝓮𝓻𝓪𝓽𝓸𝓻r</Link>
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
                        <Link className="nav-link text-white" to="/tips">Tips </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/stats">Statistics</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/facts">Facts</Link>
                    </li>


                    {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                        Disabled
                      </a>
                    </li> */}
                  </ul>
             
                </div>
              </div>
            </nav>
          );
        };
        
       

        





{/* <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
           
            
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Financial
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/simpleinterest">Simple Interest</Link></li>
                <li><Link className="dropdown-item" to="/compoundinterest">Compount Interest</Link></li>
                <li><Link className="dropdown-item" to="/amortizationschedule">Amortization Schedule</Link></li>
                <li><Link className="dropdown-item" to="/roicalculator">Return on Investment </Link></li>
                <li><Link className="dropdown-item" to="/futurevalue">Future Value Calculator </Link></li>
  
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Fitness
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/bmicalculator">Body Mass Index (BMI)</Link></li>
                <li><Link className="dropdown-item" to="/calorieCounter">Basic Calorie Counter</Link></li>
                <li><Link className="dropdown-item" to="/BasicCalorieTracker">Basic Calorie Tracker</Link></li>
                <li><Link className="dropdown-item" to="/bloodpressure">Blood Pressure  </Link></li>
                <li><Link className="dropdown-item" to="/heartrate">Heart Rate</Link></li>
               
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}




export default TopNavigation;