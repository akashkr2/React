import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import dp from "../assets/AkPr.jpg";

const SideBar = () => {
  //

  const sidebarData = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Education", path: "/education" },
    { title: "Certification", path: "/certification" },
    { title: "Project", path: "/project" },
    { title: "Contact Me", path: "/contact" },
  ];

  const location = useLocation();
  const currPath = location.pathname;

  return (
    <>
      <div className="sidebar bg-gray-950">
        <div className="flex items-center justify-center w-[80%] p-0 m-0 mx-auto aspect-square rounded-full overflow-hidden">
          <img src={dp} alt="Akash Kumar Singh" />
        </div>
        <div className="pt-3 flex items-center justify-center" id="link">
          <div className="items-center h-[100%] w-[60%] grid text-white hover:[&>*:not(:hover)]:opacity-30">
            {sidebarData.map((item, index) => {
              return (
                <div key={index} className="linkChild">
                  <Link
                    to={item.path}
                    className={currPath === item.path ? "active" : ""}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
