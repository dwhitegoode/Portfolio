import React from "react";
import hater from "../assets/hater.png";
import postgres from "../assets/postgres.svg";
import react from "../assets/react.svg";
import django from "../assets/django.svg";
import css from "../assets/css.svg";
import heroku from "../assets/heroku.svg";
import mongo from "../assets/mongo.svg";
import express from "../assets/express.svg";
import node from "../assets/node.svg";
import python from "../assets/python.svg";
import cosmos from "../assets/theinnerbod.png";
import html from "../assets/html.svg";
import javascriptsvg from "../assets/javascriptsvg.svg";
import nined from "../assets/mcu.png";
import jwt from "../assets/jwt.svg";
const Projects = () => {
  return (
    <>
      <div id="hater" className="project-container">
        <div className="project-card">
          <div className="project-image-container">
            <img src={hater} alt="hater project" />
          </div>
          <div className="project-description">
            <h1 className="hater-title">Hater</h1>
            <div className="github-links">
              <a href="https://github.com/forextroll/hater">Github</a>
            </div>
            <p>
              A social media site modeled playfully as the “evil twin” of Twitter built with a small group. Made in React, Django and PostgreSQL
              with Session-based login to authenticate user's comments
              and posts.
            </p>
            <div className="project-tools">
              <img src={postgres} alt="postgres" />
              <img src={react} alt="react" />
              <img src={django} alt="django" />
              <img src={python} alt="python" />
              <img src={css} alt="css" />
              <img src={heroku} alt="heroku" />
            </div>
          </div>
        </div>
      </div>

      <div id="cosmos" className="project-container cosmos">
        <div className="project-card">
          <div className="project-image-container">
            <img src={cosmos} alt="hater project" />
          </div>
          <div className="project-description">
            <h1 className="cosmos-title">The Inner Bod</h1>
            <div className="github-links">
              <a href="https://theinnerbod.netlify.app/">Deployed</a>
              <a href="https://github.com/NasimAkbor/TheInnerBod">Github</a>
            </div>
            <p>
              A project built with a small group that aims to provide users with helpful information on how best to take care of different parts of their body, as well as, allow them to keep track of any foods they might want to add to their diet or diagnoses they might encounter.
            </p>
            <div className="project-tools">
              <img src={mongo} alt="mongo" />
              <img src={express} alt="express" />
              <img src={react} alt="react" />
              <img src={node} alt="node" />
              <img src={css} alt="css" />
              <img src={jwt} alt="jwt" />
              <img src={heroku} alt="heroku" />
            </div>
          </div>
        </div>
      </div>
      <div id="nined" className="project-container">
        <div className="project-card">
          <div className="project-image-container">
            <img src={nined} alt="hater project" />
          </div>
          <div className="project-description">
            <h1 className="nined-title">Marvel MCU Informatic</h1>
            <div className="github-links">
              <a href="https://forextroll.github.io/GA.SEI.P3/">
                Deployed
              </a>
              <a href="https://github.com/forextroll/GA.SEI.P3">Github</a>
            </div>
            <p>
              Built a RESTful API with Express and Mongoose and fetched in a tab-based front end.

              <br></br>

            </p>
            <div className="project-tools">
              <img src={html} alt="html" />
              <img src={javascriptsvg} alt="javascriptsvg" />
              <img src={css} alt="css" />
              <img src={mongo} alt="mongo" />
              <img src={express} alt="express" />
              <img src={node} alt="node" />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
