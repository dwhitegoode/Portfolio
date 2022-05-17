import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import github from "./assets/github.svg";
import email from "./assets/gmail.svg";
import linkdin from "./assets/linkdin.svg";
export default function Home() {
  return (
    <>
      <div id="about-me" className="App">
        <div className="about-me">
          <h1>Hello, I'm David White-Goode</h1>
          <div className="profile-pic"></div>
          <h2>About me</h2>
          <p>
            I am a Full Stack React Developer bringing a strong work ethic and aptitude to learn and apply new skills. Independently and in small teams I have created fully deployed applications using React front ends with backends written in both Django with PostgreSQL and Node, Express, and Mongoose utilizing RESTful APIs and MVC design patterns. The joy of programming is in the challenges and learning how to write efficient code to overcome them. In my previous roles in IT and being a self employed Day Trader being detail oriented and self motivated to research and improve processes is something I take pride in and extend to my approach in writing code. Outside of work I enjoy taking time to decompress at the gym, playing tennis, working on my guitar technique for progressive metal, motorcycles, and learning Japanese. I’m always looking for people to connect, network and collaborate with. Feel free to reach out.


          </p>
        </div>
      </div>
      <div id="contact-info" className="contact-page">
        <h1>Contact Me : </h1>
        <div className="image-array">
          <a href="mailto:goodescientist@gmail.com">
            <img src={email} alt="gmail" />
          </a>
          <a href="https://github.com/forextroll">
            <img src={github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/davidwhitegoode/">
            <img src={linkdin} alt="Linkdin" />
          </a>
        </div>
      </div>
    </>
  );
}
