import React from "react";

import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const instaLink = "#instagram";
const fbLink = "#facebook";
const twitterLink = "#twitter";
const linkedinLink = "https://www.linkedin.com/in/akash-kumar-singh-1247aa164/";
const githubLink = "https://github.com/akashkr2";

const Footer = () => {
  return (
    <>
      <div className="footer h-[8vh] bg-gray-900 flex items-center justify-center">
        <div className="flex items-center justify-between w-25">
          <a href={instaLink}>
            <FaInstagramSquare className="i" />
          </a>
          <a href={fbLink}>
            <FaFacebookSquare className="i" />
          </a>
          <a href={twitterLink}>
            <FaTwitterSquare className="i" />
          </a>
          <a href={linkedinLink}>
            <FaLinkedin className="i" />
          </a>
          <a href={githubLink}>
            <FaGithub className="i" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
