import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import dp from "../assets/AkPr.jpg";

const SideBar = () => {
  //

  const location = useLocation();
  const currPath = location.pathname;

  return (
    <>
      <div className="sidebar">
        <div className="flex items-center justify-center w-[80%] p-0 m-0 mx-auto aspect-square rounded-full overflow-hidden">
          <img src={dp} alt="Akash Kumar Singh" />
        </div>
        <div className="pl-4" id="link">
          <ul className="linkCont list-none items-center h-[100%] grid justify-between text-white hover:[&>*:not(:hover)]:opacity-30">
            <li className="linkChild">
              <Link to={"/"} className={currPath === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li className="linkChild">
              <Link
                to={"/about"}
                className={currPath === "/about" ? "active" : ""}
              >
                About Me
              </Link>
            </li>
            <li className="linkChild">
              <Link
                to={"/education"}
                className={currPath === "/education" ? "active" : ""}
              >
                Education
              </Link>
            </li>
            <li className="linkChild">
              <Link
                to={"/certification"}
                className={currPath === "/certification" ? "active" : ""}
              >
                Certification
              </Link>
            </li>
            <li className="linkChild">
              <Link
                to={"/projects"}
                className={currPath === "/projects" ? "active" : ""}
              >
                Projects
              </Link>
            </li>
            <li className="linkChild">
              <Link
                to={"/contact"}
                className={currPath === "/contact" ? "active" : ""}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
