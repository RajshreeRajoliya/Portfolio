import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./Projects.scss";
import images from "../../constants/images";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);

  const works = [
    

    {
      imgUrl:
        images.jcrew,
      name: "rajshree",
      projectLink: "https://flipkartclonewebsite.netlify.app/",
      codeLink: "https://github.com/RajshreeRajoliya/Flipkart",
      title: "Flipkart Clone Web App",
      description:
        "This project is a clone of famous e-commerce website of India, Full flow is created in this website from login/signUp , viewing different products , adding to cart till paying for products.",
      textstack: [
        "React Js",
        "Redux",
        "Node Js",
        "Express.js",
        "MongoDB",
        "Material UI", 
      ],
      tags: ["MERN"],
    },
    {
      imgUrl:images.prodozen,
      name:"rajshree",
      projectLink:"https://blog-gram.netlify.app/",
      codeLink:"https://github.com/RajshreeRajoliya/MERN-BLOG-APP",
      title:"BLOG APPLICATION",
      description:"Allows user to post blogs , edit their blog also can delete their blog anytime . Not only this they can even check blog posted by others but can't delete or make any sort of changes.",
      textstack:[
        "React Js",
        "Redux",
        "Node Js",
        "Express.js",
        "MongoDB",
        "Material UI",
      ],
      tags:['MERN']
    },
    {
      imgUrl:images.appmovie,
      name: "rajshree",
      projectLink: "https://bookmoviebyme.netlify.app/",
      codeLink: "https://github.com/RajshreeRajoliya/MovieApp",
      title: "Movie Booking Application",
      description:
        "Movie Booking Application helps user to search movie of their choice further they can book their seat on desired date also their is admin who has the authorization to add movies to this application.",
      textstack: [
        "React Js",
        "Redux",
        "Node Js",
        "Express.js",
        "MongoDB",
        "Material UI",
      ],
      tags:['MERN']
    },
 
    {
      imgUrl:images.wal,
      name: "rajshree",
      projectLink: "https://walmartcloneee.netlify.app/",
      codeLink: "https://github.com/RajshreeRajoliya/Walmart",
      title: "Walmart Clone Web App",
      description:
      "This project is a clone of e-commerce website Walmart, Full flow is created in this website from login/signUp , viewing different products , adding to cart till making payment for products.",
      textstack: [
        "HTML",
        "CSS",
        "Javascript",
        "Chakra UI",
        "JSON Server",
        
      ],
      tags: ["JavaScript"],
    }
  ];
 

  useEffect(() => {
    setFilterWork(works);
  }, []);

  return (
    <>
      <h2 className="head-text">
      Few Things I've Build
      </h2>
    
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
        id='projects'
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex project-card" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="work__title-text project-title">{work.title}</h4>
              <p className="work__tag-text project-description" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="work__text-stack project-tech-stack" >
                {work.textstack.map((ts, ind) => {
                  return (
                    <div className="work__text-stack_single" key={ind}>
                      {ts}
                    </div>
                  );
                })}
              </div>
              <div className="icon__div">
                <a href={work.projectLink} target="_blank" rel="noreferrer" className="project-deployed-link">
                  <div>
                    <AiFillEye className="custom_buttons" />
                  </div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer" className="project-github-link">
                  <div>
                    <AiFillGithub className="custom_buttons" />
                  </div>
                </a>
              </div>
              <div className="app__work-tag app__flex">
                <p className="work__tag-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div className="app__work-Github-Calender">
        <GitHubCalendar
          username="rajshreerajoliya"
          color={"sea green"}
          blockSize={20}
          hideColorLegend
          className="app__work-calender"
        >
          <ReactTooltip html />
        </GitHubCalendar>
      </motion.div>

      <motion.div
        className="app__work-git-stats1"
        transition={{ duration: 0.1 }}
      >
        <motion.div>
          <a href="https://github.com/rajshreerajoliya">
            <img
              align="left"
              alt="readme"
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com/?user=rajshreerajoliya&theme=cobalt"
            />
          </a>
        </motion.div>
      </motion.div>
      <div className="app__work-git-stats2">
        <div>
          <a href="https://github.com/rajshreerajoliya">
            <img
              align="center"
              alt="readme"
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=rajshreerajoliya&theme=cobalt" 
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/rajshreerajoliya">
            <img
              alt="name"
              align="left"
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=rajshreerajoliya&count_private=true&show_icons=true&theme=cobalt" 
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, "app__work"),
  "projects",
  "app__primarybg"
);
