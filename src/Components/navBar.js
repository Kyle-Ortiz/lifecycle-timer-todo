import React from 'react'
import {FaBars, FaGithub,FaLinkedin} from "react-icons/fa"
import placeholder from "../placeholder.png"

function NavBar() {
     return (
          <nav>
               <div className="nav-center">
                    <div className="nav-header">
                         <img clasName="logo" src={placeholder} alt="navBar logo" />
                         <button className="nav-toggle">
                              <FaBars/>
                         </button>
                    </div>
                    <div className="links-container">
                         <ul className="class">
                              <li>
                                   <a href="#">Home</a>
                              </li>
                              <li>
                                   <a href="#">About</a>
                              </li>
                              <li>
                                   <a href="#">Contact Me</a>
                              </li>
                              <li>
                                   <a href="#">Portfolio</a>
                              </li>
                         </ul>
                    </div>
                    <ul className="social-icons">
                         <li><a href="https://www.twitter.com"><FaGithub/></a>
                         </li>
                         <li><a href="https://www.twitter.com"><FaLinkedin/></a>
                         </li>
                    </ul>
               </div>
          </nav>
     )
}

export default NavBar
