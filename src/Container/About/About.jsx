import React from "react";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap } from "../../Wrapper";
import { MotionWrap } from "../../Wrapper";
import { Button } from "@chakra-ui/react";

const About = () => {
  const abouts = {
    title: "Full Stack Web Developer",
    description:
      "Result-oriented and Enthusiastic Full Stack Web Developer proficient in tech Stacks like JavaScript, React Js, Node Js, Redux and MongoDB. Love to make Interactive UI's. I am a problem-solver and a quick learner who is constantly seeking new challenges and opportunities to grow and develop my skills. I am a highly motivated Full Stack Developer with good technical skills and a passion for creating innovative and effective solutions.",
  };
  const handleClick = () =>{
  window.open("https://drive.google.com/file/d/1dRa-RDmI4ew6hmwNoA0q0dlFJp0L-Bj-/view?usp=share_link")
  window.location.href='https://drive.google.com/uc?export=download&id=1dRa-RDmI4ew6hmwNoA0q0dlFJp0L-Bj-'
}
  return (
    <div className="about_container about section" id="about">
      <h2 className="head-text">
        About Me
      </h2>
      <div className="app__profiles">
        <div className="app__profile-item">
          <div className="app__profile-subitem">
            <img src={images.about01} alt={abouts.title} />
          </div>
          <div className="app__profile-description">
            <p className="p-text" style={{ marginTop: 10 }} id="user-detail-intro">
            {abouts.description}
            </p>
            <Button
              onClick={handleClick}
              download
              className="button-5"
              id='resume-button-2'
            >
              Resume     
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__aboutme"),
  "about me",
  "app__whitebg"
);
