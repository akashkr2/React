import React from "react";

const About = () => {
  //

  return (
    <>
      <div id="about" className="about">
        <h1 className="head">About Me</h1>
        <p className="content">
          Hey there! I'm Akash, a tech enthusiast who loves crafting web
          applications that not only function flawlessly but also look great. As
          a fresher, I bring fresh ideas, a hunger to learn, and a strong
          foundation in full-stack development. Currently, I'm exploring new
          technologies and working on exciting projects to sharpen my skills.
        </p>
        <h5 className="subHead">Objectives:</h5>
        <ol className="objectives d-grid gap-3">
          <li>
            <span className="fw-bold">Master Full-Stack Web Development</span>
            <ul>
              <li>
                Build dynamic, responsive, and efficient web applications using{" "}
                <span className="fw-bold">MERN Stack</span> and modern
                technologies.
              </li>
              <li>
                Strengthen both{" "}
                <span className="fw-bold">
                  frontend (React, JavaScript, CSS)
                </span>{" "}
                and{" "}
                <span className="fw-bold">
                  backend (Node.js, Express, MongoDB)
                </span>{" "}
                skills for seamless development.
              </li>
            </ul>
          </li>

          <li>
            <span className="fw-bold">
              Enhance Problem-Solving & Algorithmic Thinking
            </span>
            <ul>
              <li>
                Improve{" "}
                <span className="fw-bold">
                  Data Structures & Algorithms (DSA)
                </span>{" "}
                proficiency to write optimized and scalable code.
              </li>
              <li>
                Participate in coding challenges and contribute to open-source
                projects to refine problem-solving abilities
              </li>
            </ul>
          </li>

          <li>
            <span className="fw-bold">
              Develop Real-World Projects & Portfolio
            </span>
            <ul>
              <li>
                Work on <span className="fw-bold">full-stack applications</span>{" "}
                to showcase technical expertise and creativity.
              </li>
              <li>
                Build a strong{" "}
                <span className="fw-bold">GitHub repository</span> and online
                presence to demonstrate hands-on experience.
              </li>
            </ul>
          </li>

          <li>
            <span className="fw-bold">
              Stay Updated & Learn Emerging Technologies
            </span>
            <ul>
              <li>
                Keep up with the latest trends in web development, including{" "}
                <span className="fw-bold">
                  TypeScript, Next.js, GraphQL, and cloud services
                </span>
                .
              </li>
              <li>
                Explore{" "}
                <span className="fw-bold">
                  DevOps, cloud deployment (AWS, Firebase, Vercel)
                </span>
                , and automation tools for better software development
                workflows.
              </li>
            </ul>
          </li>

          <li>
            <span className="fw-bold">
              Secure Exciting Career Opportunities
            </span>
            <ul>
              <li>
                Apply for{" "}
                <span className="fw-bold">internships and full-time roles</span>{" "}
                to gain industry experience.
              </li>
              <li>
                Network with professionals, contribute to tech communities, and
                participate in{" "}
                <span className="fw-bold">hackathons and webinars</span> to grow
                as a developer.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
};

export default About;
