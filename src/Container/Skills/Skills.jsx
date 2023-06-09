import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./Skills.scss";
import { images } from "../../constants";
const Skills = () => {
  const skills = [
    {
      name: "Html 5",
      icon: images.html,
    },
    {
      name: "CSS 3",
      icon: images.css,
    },
    {
      name: "JavaScript",
      icon: images.javascript,
    },
    
    {
      name: "React Js",
      icon: images.react,
    },
    {
      name: "Redux",
      icon: images.redux,
    },
    {
      name: "Node Js",
      icon: images.node,
    },
    {
      name: "Express",
      icon: images.express,
    },
    
    {
      name: "Mongo DB",
      icon: images.mongodb,
    },
    {
      name: "Github",
      icon: images.github,
    },
    {
      name: "Chakra UI",
      icon: images.chakra,
    },
    {
      name: "Java",
      icon: images.java,
    },
    {
      name: "Postman",
      icon: images.postman,
    }, 
    {
      name: "MUI",
      icon: images.mui,
    },
    
  ];

  return (
    <div id="skills">
      <h2 className="head-text">
    Skills
      </h2>

      <div className="app__skills-container" >
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
              key={skill.name}
            >
              <div className="app__flex">
                <motion.img
                  whileHover={{ scale: [1, 1.2] }}
                  src={skill.icon}
                  alt={skill.name}
                  className="skills-card-img"
                />
              </div>
              <p className="p-text  skills-card-name">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
