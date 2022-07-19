import React from "react";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/images/about.jpg";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .about_Section_left,
  .aboutSection_right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection_button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media any screen and (max-width: 950px) {
    .about_Section_left {
      flex: 4;
    }
    .aboutSection_right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .about_Section_left,
    .aboutSection_right {
      width: 100%;
    }
    .aboutSection_right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection_button {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <>
      {" "}
      <AboutSectionStyle>
        <div className="container">
          <div className="about_Section_left">
            <SectionTitle
              subheading="Let me introduce myself"
              heading="About me"
            />
            <PText>
              I'm a btech student and I would like to be a part of an
              organization where I could use and enhance my knowledge and talent
              for the development of both the organization and myself..
            </PText>
            <div className="aboutSection_button">
              <Button btnLink="/projects" btnTxt="Works" />
              <Button btnLink="/about" btnTxt="Read More" outline />
            </div>
          </div>
          <div className="aboutSection_right">
            <Fade right>
              <img src={AboutImg} alt="" />{" "}
            </Fade>
          </div>
        </div>
      </AboutSectionStyle>
    </>
  );
}
