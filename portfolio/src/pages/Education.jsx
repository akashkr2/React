import React from "react";
import { GiGraduateCap } from "react-icons/gi";

const Education = () => {
  return (
    <>
      <div className="education flex flex-col gap-4">
        <h3 className=" grid gap-2 items-baseline justify-between">
          <span className="head flex gap-2 items-center">
            {/* <GiGraduateCap /> */}
            🎓 My Learning Journey
          </span>
          <span className="flex gap-5 text-gray-400">
            <span></span>
            <h5>From classrooms to code — here's how it all began</h5>
          </span>
        </h3>
        <div className="body">
          <div className="prologue earlySteps">
            <h4 className="subHead">🧒 Early Steps into the World of Code</h4>
            <span className="h-8 border-l-2 ml-2 pl-4 text-gray-600 italic flex items-center">
              <h6 className="">
                “My journey began not with textbooks, but with a turtle on the
                screen.”
              </h6>
            </span>
          </div>
          <div className="journey class1To12">
            <ul>
              <li className="journeyPath class1To4 px-1 py-3">
                <h5 className="grid gap-2">
                  <span>Class 1 to 4</span>
                  <span className="h-8 border-l-2 pl-4 flex items-center opacity-50">
                    Army Public School, Agartala, Tripura
                  </span>
                  <ul className="text-base font-normal grid gap-2">
                    <li>
                      In <strong>Class 3</strong>, I wrote my{" "}
                      <strong>first program</strong> — a{" "}
                      <strong>Turtle Game in Small Basic</strong>, using simple
                      commands to control a turtle’s movement on screen.
                    </li>
                    <li>
                      This playful start sparked a lifelong interest in
                      programming.
                    </li>
                  </ul>
                </h5>
              </li>
              <li className="journeyPath class4To7 px-1 py-3">
                <h5 className="grid gap-2">
                  <span>Class 4 to 7</span>
                  <span className="h-8 border-l-2 pl-4 flex items-center opacity-50">
                    Kendriya Vidyalaya No. 1, Udhampur, Garhi, Jammu & Kashmir
                  </span>
                  <ul className="text-base font-normal grid gap-2">
                    <li>
                      Continued exploring computers and adjusted to new academic
                      environments with every transfer.
                    </li>
                  </ul>
                </h5>
              </li>
              <li className="journeyPath class7To12 px-1 py-3">
                <h5 className="grid gap-2">
                  <span>Class 7 to 12</span>
                  <span className="h-8 border-l-2 pl-4 flex items-center opacity-50">
                    Kendriya Vidyalaya, Jamalpur, Bihar
                  </span>
                  <ul className="text-base font-normal grid gap-2">
                    <li>
                      <strong>Class 8:</strong> Discovered <strong>HTML</strong>
                      , which deepened my curiosity about the web.
                    </li>
                    <li>
                      <strong>Class 10 (2019):</strong> Scored{" "}
                      <strong>81.8%</strong>
                    </li>
                    <li>
                      <span>
                        <strong>Class 12 (2021):</strong> Scored{" "}
                        <strong>76.8%</strong> in PCM with English & Computer
                        Science.
                      </span>
                      <ul className="text-sm grid gap-2 pt-2">
                        <li>
                          Learned <strong>Python</strong>,{" "}
                          <strong>MySQL</strong>, and revisited{" "}
                          <strong>Turtle</strong>, now through Python — a
                          beautiful callback to my very first program.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </h5>
              </li>
            </ul>
          </div>
          <div className="prologue lifeLesson">
            <h4 className="subHead">🌐 Every Place Taught Me Something New</h4>
            <span className="h-8 border-l-2 ml-2 pl-4 text-gray-600 italic flex items-center">
              <h6 className="">
                “Changing schools taught me flexibility. Coding taught me focus.
                Together, they made me who I am today.”
              </h6>
            </span>
          </div>
          <div className="prologue passionToProfession">
            <h4 className="subHead">💻 Turning Passion into Profession</h4>
            <span className="h-8 border-l-2 ml-2 pl-4 text-gray-600 italic flex items-center">
              <h6 className="">
                “I chose to pursue what excited me the most — building things
                with code.”
              </h6>
            </span>
          </div>
          <div className="journey college">
            <ul>
              <li className="journeyPath px-1 py-3">
                <h5 className="grid gap-2">
                  <span>B.Tech in Computer Science (2021–2025)</span>
                  <span className="h-8 border-l-2 pl-4 flex items-center opacity-50">
                    Technocrats Institute of Technology, Bhopal
                  </span>
                  <ul className="text-base font-normal grid gap-2">
                    <li>
                      Now diving deep into <strong>MERN stack</strong>, building
                      real-world projects, and sharpening my software
                      development skills.
                    </li>
                    <li>
                      From a curious kid with a turtle to a full-stack developer
                      — the journey continues.
                    </li>
                  </ul>
                </h5>
              </li>
            </ul>
          </div>
          <div className="prologue outsideClass">
            <h4 className="subHead">📚 Beyond the Classroom</h4>
            <span className="h-8 border-l-2 ml-2 pl-4 text-gray-600 italic flex items-center">
              <h6 className="">
                “Learning doesn’t stop at college — I’m constantly upgrading
                myself.”
              </h6>
            </span>
          </div>
          <div className="journey course webDev">
            <ul>
              <li className="journeyPath px-1 py-3">
                <h5 className="grid gap-2">
                  <span>💻 Java + DSA + Web Development (MERN) Course</span>
                  <span className="h-8 border-l-2 pl-4 flex items-center opacity-50">
                    Technocrats Institute of Technology, Bhopal
                  </span>
                  <ul className="text-base font-normal grid gap-2">
                    <li>
                      A comprehensive program focused on mastering{" "}
                      <strong>Java, Data Structures & Algorithms</strong>, and
                      building scalable full-stack applications using the{" "}
                      <strong>MERN stack</strong>.
                    </li>
                    <li>
                      Helps me stay industry-ready and sharpens both my coding
                      logic and development skills.
                    </li>
                  </ul>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
