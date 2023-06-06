import React, { useRef, useState } from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { AppWrap, MotionWrap } from "../../Wrapper";
import emailjs from "@emailjs/browser";
import { BsFillPhoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import "./Contact.scss";
const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7umul8l",
        "template_5txgf5n",
        form.current,
        "riJqoRxifxRvYX6Wt"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsFormSubmitted(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="app__footer" id='contacts'>
      <h2 className="head-text">
       Contact Details
      </h2>
      <Flex
        mt="2rem"
        pl="0"
        id="contact"
        pb="1rem"
        className="app__footer-cards"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        w="90%"
        boxShadow="5px 10px silver"
        borderRadius={"10px"}
      >
        <Box
          
          bgColor="rgb(15,22,34)"
          _hover={{ boxShadow: "0 0 15px rgb(0,160,160)" }}
          transition=".5s ease"
          padding={"1rem"}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "45%" }}
          borderRadius={".5rem"}
        >
          <Text
            // fontStyle={"italic"}
            fontSize="xl"
            color="rgb(204,214,246)"
            fontFamily={"Roboto Mono" , "monospace"}
            textAlign={"center"}
          >
           Get in Touch
          </Text>
          <div className="app__footer-card">
            <SiGmail color="blue" />
            <Link
              target={"_blank"}
              ml="0.5rem"
              href="mailto:sdekrishan@gmail.com"
              className="work__tag-text"
              id="contact-email"
            >
              rajshreerajoliya14@gmail.com
            </Link>
          </div>
          <div className="app__footer-card">
            <HiLocationMarker color="green" />

            <Link
              target={"_blank"}
              href="https://goo.gl/maps/MqmZXBG7qWtSvNB86"
              ml="0.5rem"
              className="work__tag-text"
            >
              Indore, Madhya Pradesh
            </Link>
          </div>
          <div className="app__footer-card">
            <BsFillPhoneFill color="red" />

            <Link
              target={"_blank"}
              href="tel:7988398651"
              ml="0.5rem"
              className="work__tag-text"
              id="contact-phone"
            >
              8839128201
            </Link>
          </div>
          <div className="app__footer-card">
            <BsGithub color="black" />

            <Link
              target={"_blank"}
              href="https://github.com/RajshreeRajoliya"
              ml="0.5rem"
              className="work__tag-text"
              id='contact-github'
            >
             RajshreeRajoliya
            </Link>
          </div>
          <div className="app__footer-card">
            <BsLinkedin color="blue" />

            <Link
              target={"_blank"}
              href="https://www.linkedin.com/in/rajshree-r/"
              ml="0.5rem"
              className="work__tag-text"
              id="contact-linkedin"
            >
             Rajshree Rajoliya
            </Link>
          </div>
        </Box>
        <Box
          w={{ base: "100%", sm: "100%", md: "100%", lg: "55%" }}
          padding={"2rem"}
        >
          {!isFormSubmitted ? (
            <form ref={form} onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Name" />
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Email" />
              <label>Message</label>
              <textarea name="message" rows={"3"} placeholder="Message" />
              <input
                type="submit"
                value={loading ? "Sending..." : "Send Message"}
              />
            </form>
          ) : (
            <div>
              <Text fontSize={"2xl"} color="#073a5b" textAlign={"center"} background={"rgb(15,22,34)"}>
                Thank you for getting in touch!😍
              </Text>
            </div>
          )}
        </Box>
      </Flex>
      <Text
        mt="4rem"
        fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "2xl" }}
        textAlign="center"
        padding={'1rem'}
        fontFamily={"Roboto Mono" , "monospace"}
        color="rgb(204,214,246)"
        bgColor={'rgb(15,22,34)'}
        w='full'
      >
       Designed and build by Rajshree Rajoliya 😎
      </Text>
    </div>
  );
};


export default Footer;
