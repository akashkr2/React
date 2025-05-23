import React from "react";
import { useState, useEffect } from "react";
import { typewriterDelayed } from "../functions/typewriterDelayed";

localStorage.setItem("hasSeenIntro", "false");

const Home = () => {
  const intro = ["Hello, I'm Akash 👋"];
  const { text: introText } = typewriterDelayed(intro);

  const [showRest, setShowRest] = useState(false);
  const [hasSeenIntro, setHasSeenInro] = useState(false);

  let alreadySeen = localStorage.getItem("hasSeenIntro");

  useEffect(() => {
    //
    alreadySeen = localStorage.getItem("hasSeenIntro");

    if (alreadySeen === "true") {
      setShowRest(true);
    } else {
      setTimeout(() => {
        setShowRest(true);
        localStorage.setItem("hasSeenIntro", "true");
        setHasSeenInro(true);
        // console.log("intro complete");
      }, 2500);
    }
  }, []);
  return (
    <>
      <div className="home grid">
        <div className="nameDiv">
          <div className="flex">
            {/* <h1 className="typewriter">I Am Akash</h1> */}
            <h1 className="intro cursor">{introText}</h1>
          </div>
        </div>
        {/* <span className="border-r-2 border-cyan-400 animate-pulse ml-1 inline-block"></span> */}
        {showRest && (
          <div
            className={`aboutMe grid justify-around ${
              hasSeenIntro === false
                ? ""
                : "animate-fade-in transition-all duration-700"
            }`}
          >
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
        )}
      </div>
    </>
  );
};

export default Home;
