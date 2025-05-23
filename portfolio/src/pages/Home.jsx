import React from "react";
import { useState, useEffect } from "react";
import { PiHandWavingDuotone } from "react-icons/pi";
import { typewriter } from "../functions/typewriter";
import { typeDelete } from "../functions/typedelete";
import { popup } from "../functions/popup";

localStorage.setItem("hasSeenIntro", "false");

const Home = () => {
  //
  const intro = ["Hello, I'm Akash 👋"];
  const introText = typewriter(intro);

  // popup();
  //   just change overflow-hidden between tarSpan, targetWord and animation
  return (
    <>
      <div className="home grid">
        <div className="nameDiv">
          {/* <div id="animation" className="animation flex">
            {"Hello I Am Akash.".split(" ").map((word, wordIndex) => (
                <div key={wordIndex} className="targetWord d-flex">
                  {word.split("").map((letter, letterIndex) => (
                    <span key={letterIndex} className="tarSpan">
                      <h1 className="tar">{letter}</h1>
                    </span>
                  ))}
                </div>
              ))}
          </div> */}
          <div className="flex">
            {/* <h1 className="typewriter">I Am Akash</h1> */}
            <h1 className="intro cursor">{introText}</h1>
          </div>
          {/* <div className="flex">
            <h5 className="info">{infoText}</h5>
          </div> */}
        </div>
        {/* <span className="border-r-2 border-cyan-400 animate-pulse ml-1 inline-block"></span> */}
        {
          <div className="aboutMe grid justify-around">
            <h5 className="subHead">Full Stack Developer | MERN Enthusiast</h5>
            <ul>
              <li>🚀 Turning Ideas into Interactive Web Experiences</li>
              <li>
                Passionate about building sleek, responsive, and dynamic web
                applications.
              </li>
              <li>Skilled in MERN Stack, Java, DSA, and Python (beginner).</li>
            </ul>
            <h5 className="subHead">About Me</h5>
            <p className="content">
              Hey there! I'm Akash, a tech enthusiast who loves crafting web
              applications that not only function flawlessly but also look
              great. As a fresher, I bring fresh ideas, a hunger to learn, and a
              strong foundation in full-stack development. Currently, I'm
              exploring new technologies and working on exciting projects to
              sharpen my skills.
            </p>
            <h5 className="subHead">What I Do</h5>
            <ul>
              <li>Frontend Magic ✨ (React, JavaScript, CSS)</li>
              <li>Backend Brilliance ⚡ (Node.js, Express, MongoDB)</li>
              <li>Problem-Solving 🧠 (DSA, Java)</li>
              <li>Always Learning & Building!</li>
            </ul>
          </div>
        }
      </div>
    </>
  );
};

export default Home;
